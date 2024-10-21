import { borderContainerElement } from './utils/createbordercontainer';
import { BORDER_SIZE, COLOR_THEME } from './utils/defaultstyle';
import { insertAfterElement } from './utils/insertafterelement';
import { validateHTMLElement } from './utils/validatehtmlelement';

interface IFancyBorderOptions {
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
}

interface ISideBlocks {
  borderLeft?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

/**
 * Add a fancy border to an element.
 * @param {HTMLElement} element - The element to add a fancy border to.
 * @param {IFancyBorderOptions} [borderOptions={}] - The border options (`borderColor`, `borderWidth`, `borderStyle`).
 * @throws {Error} Will throw an error if the first argument is not an HTML element.
 * @returns {void}
 * @example
 * const element = document.getElementById('element');
 * const anotherElement = document.getElementById('anotherElement');
 *
 * // Add fancy border to the element with default options
 * addFancytBorder(element);
 *
 * // Add a fancy border to the element with a provided options
 * addFancyBorder(anotherElement, { borderColor: 'yellow' , borderWidth: '5px', borderStyle: 'double' });
 */
function addFancyBorder(
  element: HTMLElement,
  borderOptions: IFancyBorderOptions = {},
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

  insertAfterElement(element, borderContainer);
  appendSideBlockBorders(borderContainer);
  borderContainer.append(element, outsetBorder(borderWidth));
}

/**
 *  This function is use to create an outside border element
 * @param {sting} elementBorderWidth - The width of the inside border, this is use to calculate the offset of the outerBorder element to the inside border
 * @returns {HTMLDivElement} returns the outset border element (`div`)
 */

function outsetBorder(elementBorderWidth: string): HTMLDivElement {
  const outsetBorderElement = document.createElement('div');
  const outerElementOffset = '20px';
  const outsetBorderElementSize = `calc(100% + ${outerElementOffset} + ${elementBorderWidth})`;
  const outsetBorderElementStyle = {
    height: outsetBorderElementSize,
    width: outsetBorderElementSize,
    boxSizing: 'inherit',
    border: 'inherit',
    borderRadius: 'inherit',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '-1',
  };
  Object.assign(outsetBorderElement.style, outsetBorderElementStyle);
  return outsetBorderElement;
}

/**
 * This is the function that's going to create and append all of the four side blocks that is inside of the element border.
 * @param {HTMLElement} borderContainer - The border container element that is going to append all of the four side blocks
 * @return void
 */
function appendSideBlockBorders(borderContainer: HTMLElement): void {
  const blockPositions: ISideBlocks[] = [
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

  blockPositions.forEach(block => borderContainer.append(sideBlock(block)));
}

/**
 * This is the function use to create a border side blocks or box inside of the element border.
 * @param {ISideBlocks} blockOptions - the border options for this element, the four border sides and the position of it inside of the border container element
 * @returns {HTMLDivElement} returns the block border element (`div`)
 */
function sideBlock(blockOptions: ISideBlocks): HTMLDivElement {
  const sideBlockElement = document.createElement('div');
  const blockSize = '10px';
  const boxElementStyle = {
    height: blockSize,
    width: blockSize,
    boxSizing: 'inherit',
    position: 'absolute',
    ...blockOptions,
  };
  Object.assign(sideBlockElement.style, boxElementStyle);
  return sideBlockElement;
}

export { addFancyBorder };
