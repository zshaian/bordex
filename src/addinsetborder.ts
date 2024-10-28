import { BorderWidthOptional, CommonBorderStyles } from './types/borderstyle';
import { clearElementBackground } from './utils/clearelementbackground';
import { borderContainerElement } from './utils/createbordercontainer';
import { BORDER_SIZE } from './utils/defaultstyle';
import { getComputedStyleValue } from './utils/getcomputedstylevalue';

interface IInsetBorderOptions extends BorderWidthOptional {
  borderOffset?: string;
  borderStyle?: CommonBorderStyles;
}

/**
 * Add an inset border to an element.
 * @param {HTMLElement} element - The element to add an inset border to.
 * @param {IInsetBorderOptions} [borderOptions={}] - The border options (`borderOffset`, `borderWidth`,`borderStyle`, etc.).
 * @throws {Error} Will throw an error if the first argument is not an HTML element.
 * @returns {void}
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
): void {
  const borderContainer = borderContainerElement(element);

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

  const insideBorderElement = insideBorder(
    borderOffset,
    borderWidth,
    borderContainer,
  );

  const outsideBordElement = outsideBorder(
    borderOffset,
    borderWidth,
    borderContainer,
  );

  const elementBackground = createBackgroundElement(
    borderContainer,
    borderWidth,
  );

  Object.assign(borderContainer.style, borderContainerStyle);

  borderContainer.append(
    insideBorderElement,
    outsideBordElement,
    elementBackground,
  );
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
  const elementParentBgc = getComputedStyleValue(
    element.parentElement as HTMLElement,
    'background-color',
  ) as string;
  const insideBorderElement = document.createElement('div');
  const insideBorderElementStyle = {
    height: `calc(100% - ${offset})`,
    width: `calc(100% - ${offset})`,
    borderRadius: 'inherit',
    borderTop: 'inherit',
    borderLeft: 'inherit',
    borderTopColor: `${elementParentBgc}`,
    borderLeftColor: `${elementParentBgc}`,
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
  element: HTMLElement,
): HTMLDivElement {
  /* ISSUE: if there's no specific background-color set to an element this is going to return a transparent color,
     causing the outisdeBorderElement to also have a transparent color, also if the parent of the element have a 
     background image set to them it's not going to get apply to the border.
  */
  const elementBgc = element.style.backgroundColor;
  const outsideBorderElement = document.createElement('div');
  const outsideBorderElementDesign = {
    height: '100%',
    width: '100%',
    borderRadius: 'inherit',
    border: 'inherit',
    borderColor: `${elementBgc}`,
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
  borderWidth: string,
): HTMLDivElement {
  const elementBgc = element.style.backgroundColor;

  const elementBackground = document.createElement('div');
  const elementBackgroundStyle = {
    height: '100%',
    width: '100%',
    inset: `${borderWidth}`,
    borderRadius: 'inherit',
    backgroundColor: `${elementBgc}`,
    position: 'absolute',
    zIndex: '-3',
  };

  Object.assign(elementBackground.style, elementBackgroundStyle);

  clearElementBackground(element);

  return elementBackground;
}

export { addInsetBorder };
