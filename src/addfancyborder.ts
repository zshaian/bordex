import { IPositions, IShorthandBorderOptions } from './types/border.type';
import { CSSStyles } from './types/styles';
import { borderContainerElement } from './utils/createbordercontainer';
import { BORDER_SIZE, COLOR_THEME } from './utils/defaultstyle';
import { validateHTMLElement } from './utils/validatehtmlelement';

interface ISideBlocks extends IPositions {
  borderLeft?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
}

/**
 * Add a fancy border to an element.
 * @param {HTMLElement} element - The element to add a fancy border to.
 * @param {IShorthandBorderOptions} [borderOptions={}] - The border options (`borderColor`, `borderWidth`, `borderStyle`).
 * @throws {Error} Will throw an error if the first argument is not an HTML element.
 * @returns {void}
 * @example
 * const element = document.getElementById('element');
 * const anotherElement = document.getElementById('anotherElement');
 *
 * // Add fancy border to the element with default options
 * addFancyBorder(element);
 *
 * // Add a fancy border to the element with a provided options
 * addFancyBorder(anotherElement, { borderColor: 'yellow' , borderWidth: '5px', borderStyle: 'double' });
 */
function addFancyBorder(
  element: HTMLElement,
  borderOptions: IShorthandBorderOptions = {},
): void {
  validateHTMLElement(element);
  const borderContainer = borderContainerElement(element);
  const {
    borderColor = COLOR_THEME.primary,
    borderWidth = BORDER_SIZE.sm,
    borderStyle = 'solid',
  } = borderOptions;

  Object.assign(borderContainer.style, {
    borderColor,
    borderWidth,
    borderStyle,
    boxSizing: 'content-box',
  });

  createAndAppendSideBlockBorders(borderContainer);
  borderContainer.append(outsetBorder(borderWidth));
}

/**
 *  This function is use to create an outside border element
 * @param {sting} elementBorderWidth - The width of the inside border, this is use to calculate the offset of the outerBorder element to the inside border
 * @returns {HTMLDivElement} returns the outset border element (`div`)
 */
function outsetBorder(elementBorderWidth: string): HTMLDivElement {
  const outsetBorderElement = document.createElement('div');
  const outerElementOffset = '20px';
  const outsetBorderElementSize = `calc(0px - (${outerElementOffset} + ${elementBorderWidth}))`;
  const outsetBorderElementStyle: CSSStyles = {
    boxSizing: 'inherit',
    border: 'inherit',
    borderRadius: 'inherit',
    position: 'absolute',
    inset: `${outsetBorderElementSize}`,
    zIndex: '-1',
  };
  Object.assign(outsetBorderElement.style, outsetBorderElementStyle);
  return outsetBorderElement;
}

/**
 * This is the function that's going to create and append all of the four side blocks that is inside of the element border.
 * @param {HTMLElement} borderContainer - The border container element that is going to append all of the four side blocks
 * @returns {void} No return value.
 */
function createAndAppendSideBlockBorders(borderContainer: HTMLElement): void {
  const sideBlockBordersPosition: ISideBlocks[] = [
    {
      borderRight: 'inherit',
      borderBottom: 'inherit',
      top: '0',
      left: '0',
    },
    {
      borderLeft: 'inherit',
      borderBottom: 'inherit',
      top: '0',
      right: '0',
    },
    {
      borderRight: 'inherit',
      borderTop: 'inherit',
      bottom: '0',
      left: '0',
    },
    {
      borderLeft: 'inherit',
      borderTop: 'inherit',
      bottom: '0',
      right: '0',
    },
  ];

  sideBlockBordersPosition.forEach(sideBlockBorderOptions =>
    borderContainer.append(createSideBlockBorder(sideBlockBorderOptions)),
  );
}

/**
 * This is the function use to create a border side blocks or box inside of the element border.
 * @param {ISideBlocks} blockOptions - the border options for this element, the four border sides and the position of it inside of the border container element
 * @returns {HTMLDivElement} returns the block border element (`div`)
 */
function createSideBlockBorder(
  sideBlockBorderOptions: ISideBlocks,
): HTMLDivElement {
  const sideBlockElement = document.createElement('div');
  const blockSize = '10px';
  const boxElementStyle: CSSStyles = {
    height: blockSize,
    width: blockSize,
    boxSizing: 'inherit',
    position: 'absolute',
    ...sideBlockBorderOptions,
  };
  Object.assign(sideBlockElement.style, boxElementStyle);
  return sideBlockElement;
}

export { addFancyBorder };
