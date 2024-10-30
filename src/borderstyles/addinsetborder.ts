import { BorderWidthOptional, CommonBorderStyles } from '../types/border.type';
import { CSSStyles } from '../types/styles.type';
import {
  borderContainerElement,
  BORDER_SIZE,
  getComputedStyleValue,
} from '../utils';

interface IInsetBorderOptions extends BorderWidthOptional {
  borderOffset?: string;
  borderStyle?: CommonBorderStyles;
}

/**
 * Add an inset border to an element.
 * @param {HTMLElement} element - The element to add an inset border to.
 * @param {IInsetBorderOptions} [borderOptions={}] - The border options (`borderOffset`, `borderWidth`,`borderStyle`, etc.).
 * @param {string} [className] - Optional class name to apply custom CSS styling to the container.
 * @throws {Error} Will throw an error if the first argument is not an HTML element.
 * @returns {HTMLDivElement} The container element wrapping the original element with the inset border applied.
 *
 * @example
 * const element = document.getElementById('element');
 * const anotherElement = document.getElementById('anotherElement');
 *
 * // Add an inset border to the element with default options
 * addInsetBorder(element);
 *
 * // Add an inset border to the element with a provided options
 * addInsetBorder(anotherElement, { borderOffset: '20px' , borderWidth: '5px', borderStyle: 'double' });
 */
function addInsetBorder(
  element: HTMLElement,
  borderOptions: IInsetBorderOptions = {},
  className?: string,
): HTMLDivElement {
  const borderContainer = borderContainerElement(element, className);

  const {
    borderOffset = '15px',
    borderWidth = BORDER_SIZE.sm,
    borderStyle = 'solid',
  } = borderOptions;

  const borderContainerStyle = {
    borderWidth,
    borderStyle,
    borderColor: 'transparent',
  };

  /* ISSUE: if there's no specific background-color set to an element this is going to return a transparent color,
     causing the outisdeBorderElement to also have a transparent color, also if the parent of the element have a 
     background image set to them it's not going to get apply to the border.
  */
  const borderContainerBg = getComputedStyleValue(
    borderContainer,
    'background-color',
  ) as string;

  const insideBorderElement = insideBorder(
    borderOffset,
    borderWidth,
    borderContainer,
  );

  const outsideBordElement = outsideBorder(
    borderOffset,
    borderWidth,
    borderContainerBg,
  );

  const elementBackground = createBackgroundElement(
    borderContainer,
    borderContainerBg,
    borderWidth,
  );

  Object.assign(borderContainer.style, borderContainerStyle);

  borderContainer.append(
    insideBorderElement,
    outsideBordElement,
    elementBackground,
  );

  return borderContainer;
}

function insideBorder(
  offset: string,
  borderWidth: string,
  element: HTMLElement,
): HTMLDivElement {
  /* ISSUE: if there's no specific background-color set to an element this is going to return a transparent background,
     causing the insideBorderElement to also have a transparent color, also if the element  have a background image
     set to them it's not going to get apply to the border.
  */
  const elementParentBg = getComputedStyleValue(
    element.parentElement as HTMLElement,
    'background-color',
  ) as string;
  const insideBorderElement = document.createElement('div');
  const insideBorderElementStyle: CSSStyles = {
    height: `calc(100% - ${offset})`,
    width: `calc(100% - ${offset})`,
    borderRadius: 'inherit',
    borderTop: 'inherit',
    borderLeft: 'inherit',
    borderTopColor: `${elementParentBg}`,
    borderLeftColor: `${elementParentBg}`,
    position: 'absolute',
    left: `calc(${offset} + ${borderWidth})`,
    top: `calc(${offset} + ${borderWidth})`,
    zIndex: '-1',
  };
  Object.assign(insideBorderElement.style, insideBorderElementStyle);
  return insideBorderElement;
}

function outsideBorder(
  offset: string,
  borderWidth: string,
  elementBg: string,
): HTMLDivElement {
  const outsideBorderElement = document.createElement('div');
  const outsideBorderElementDesign: CSSStyles = {
    height: '100%',
    width: '100%',
    borderRadius: 'inherit',
    border: 'inherit',
    borderColor: `${elementBg}`,
    position: 'absolute',
    left: `calc(${offset} + ${borderWidth})`,
    top: `calc(${offset} + ${borderWidth})`,
    zIndex: '-2',
  };
  Object.assign(outsideBorderElement.style, outsideBorderElementDesign);
  return outsideBorderElement;
}

function createBackgroundElement(
  element: HTMLElement,
  elementBg: string,
  borderWidth: string,
): HTMLDivElement {
  /*
   clear the background color of the element,
    because it is going to get replaced with this element that will act as a background
  */
  element.style.backgroundColor = 'transparent';

  const elementBackground = document.createElement('div');
  const elementBackgroundStyle: CSSStyles = {
    height: '100%',
    width: '100%',
    inset: `${borderWidth}`,
    borderRadius: 'inherit',
    backgroundColor: `${elementBg}`,
    position: 'absolute',
    zIndex: '-3',
  };

  Object.assign(elementBackground.style, elementBackgroundStyle);

  return elementBackground;
}

export { addInsetBorder };
