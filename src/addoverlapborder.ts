import { FullBorderOptions } from './types/border.type';
import { CSSStyles } from './types/styles';
import { borderContainerElement } from './utils/createbordercontainer';
import { BORDER_SIZE, COLOR_THEME } from './utils/defaultstyle';
import { validateHTMLElement } from './utils/validatehtmlelement';

/**
 * Add a border that overlap to each other, to an element.
 * @param {HTMLElement} element - The element to add an overlap border to.
 * @param {FullBorderOptions} [borderOptions={}] - The border options (`borderColor`, `borderWidth`, `borderStyle`, etc.).
 * @param {string} [className] - Optional class name to apply custom CSS styling to the container.
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
  className?: string,
): void {
  validateHTMLElement(element);

  const borderContainer = borderContainerElement(element, className);
  const outsideBorderElementOffset = '40px';

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
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderStyle,
    borderColor,
    ...moreBorderOptions,
  });

  const verticalBorderWidth = `calc(${borderTopWidth} + ${borderBottomWidth})`;
  const horizontalBorderWidth = `calc(${borderLeftWidth} + ${borderRightWidth})`;

  borderContainer.append(
    outsideBorderElement(
      outsideBorderElementOffset,
      verticalBorderWidth,
      horizontalBorderWidth,
    ),
  );
}

function outsideBorderElement(
  outsideBorderElementOffset: string,
  verticalBorderWidth: string,
  horizontalBorderWidth: string,
): HTMLDivElement {
  const outsideBorder = document.createElement('div');

  const outsideBorderStyle: CSSStyles = {
    boxSizing: 'content-box',
    border: 'inherit',
    borderRadius: 'inherit',
    position: 'absolute',
    inset: `calc(0px - (${outsideBorderElementOffset} + ${verticalBorderWidth})) calc(${outsideBorderElementOffset} - ${horizontalBorderWidth})`,
    zIndex: '-1',
  };

  Object.assign(outsideBorder.style, outsideBorderStyle);
  return outsideBorder;
}

export { addOverlapBorder };
