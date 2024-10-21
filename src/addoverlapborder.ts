import { FullBorderOptions } from './types/borderstyle';
import { borderContainerElement } from './utils/createbordercontainer';
import { BORDER_SIZE, COLOR_THEME } from './utils/defaultstyle';
import { getComputedStyleValue } from './utils/getcomputedstylevalue';
import { insertAfterElement } from './utils/insertafterelement';
import { validateHTMLElement } from './utils/validatehtmlelement';

/**
 * Add a border that overlap to each other, to an element.
 * @param {HTMLElement} element - The element to add an overlap border to.
 * @param {FullBorderOptions} [borderOptions={}] - The border options (`borderColor`, `borderWidth`, `borderStyle`, etc.).
 * @throws {Error} Will throw an error if the first argument is not an HTML element.
 * @returns {void}
 * @example
 * const element = document.getElementById('element');
 * const anotherElement = document.getElementById('anotherElement');
 *
 * // Add an overlap border to the element with default options
 * addOverlapBorder(element);
 *
 * // Add an overelap border to the element with a provided options
 * addOverlapBorder(anotherElement, { borderColor: 'yellow' , borderWidth: '5px', borderStyle: 'double' });
 */
function addOverlapBorder(
  element: HTMLElement,
  borderOptions: FullBorderOptions = {},
): void {
  validateHTMLElement(element);

  const borderContainer = borderContainerElement(element);
  const outsideBorderElementOffset = '40px';

  const elementBgc = getComputedStyleValue(
    element,
    'background-color',
  ) as string;
  const elementBg = getComputedStyleValue(element, 'background') as string;

  const {
    borderWidth = BORDER_SIZE.sm,
    borderTopWidth = borderWidth,
    borderRightWidth = borderWidth,
    borderBottomWidth = borderWidth,
    borderLeftWidth = borderWidth,
    borderStyle = 'solid',
    borderColor = COLOR_THEME.primary,
    ...moreBorderOptions
  } = borderOptions;

  // Set style for border container
  Object.assign(borderContainer.style, {
    backgroundColor: elementBgc,
    background: elementBg,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderStyle,
    borderColor,
    ...moreBorderOptions,
  });

  insertAfterElement(element, borderContainer);

  const verticalBorderWidth = `calc(${borderTopWidth} + ${borderBottomWidth})`;
  const horizontalBorderWidth = `calc(${borderLeftWidth} + ${borderRightWidth})`;

  borderContainer.append(
    element,
    outsideBorderElement(
      outsideBorderElementOffset,
      verticalBorderWidth,
      horizontalBorderWidth,
    ),
  );

  // Set the background color of the element to transparent and clear its current background, if any.
  // This is done because we copied the element's background to the borderContainerElement to address the gap
  // between the border of the borderContainerElement and the element's background.
  // FIXME: Find a better way to achieve this, possibly by retrieving the border widths for all four sides of the borderContainerElement and adding them to its border radius.
  element.style.backgroundColor = 'transparent';
  element.style.background = 'none';
}

function outsideBorderElement(
  outsideBorderElementOffset: string,
  verticalBorderWidth: string,
  horizontalBorderWidth: string,
): HTMLDivElement {
  const outsideBorder = document.createElement('div');

  const outsideBorderStyle = {
    height: `calc(100% + ${outsideBorderElementOffset} + ${verticalBorderWidth})`,
    width: `calc((100% - ${outsideBorderElementOffset}) - ${horizontalBorderWidth})`,
    boxSizing: 'content-box',
    border: 'inherit',
    borderRadius: 'inherit',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '-1',
  };

  Object.assign(outsideBorder.style, outsideBorderStyle);
  return outsideBorder;
}

export { addOverlapBorder };
