import { BorderWidthOptional, CommonBorderStyles } from './types/borderstyle';
import { borderContainerElement } from './utils/createbordercontainer';
import { BORDER_SIZE } from './utils/defaultstyle';
import { getComputedStyleValue } from './utils/getcomputedstylevalue';
import { insertAfterElement } from './utils/insertafterelement';
import { validateHTMLElement } from './utils/validatehtmlelement';

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
  validateHTMLElement(element);
  const {
    borderOffset = '15px',
    borderWidth = BORDER_SIZE.sm,
    borderStyle = 'solid',
  } = borderOptions;
  const borderContainer = borderContainerElement(element);
  const borderContainerStyle = {
    borderWidth,
    borderStyle,
    borderColor: 'transparent',
  };
  const insideBorderElement = insideBorder(borderOffset, element);
  const outsideBordElement = outsideBorder(borderOffset, element);
  // this thing is the one that's going to act as a background to the element,
  // because we need a way to overlap the inside and outside border element to the background.
  const elementBaseBackgroundElement = backgroundElement(element);

  Object.assign(borderContainer.style, borderContainerStyle);
  insertAfterElement(element, borderContainer);
  borderContainer.append(
    element,
    insideBorderElement,
    outsideBordElement,
    elementBaseBackgroundElement,
  );

  // set the background of an element to transparent so we can see the inside and outside border element,
  // without getting covered by the element's background
  element.style.background = 'transparent';
  element.style.background = 'none';
}

function insideBorder(offset: string, element: HTMLElement): HTMLDivElement {
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
    left: `${offset}`,
    top: `${offset}`,
    zIndex: '-1',
  };
  Object.assign(insideBorderElement.style, insideBorderElementStyle);
  return insideBorderElement;
}

function outsideBorder(offset: string, element: HTMLElement): HTMLDivElement {
  /* ISSUE: if there's no specific background-color set to an element this is going to return a transparent color,
     causing the outisdeBorderElement to also have a transparent color, also if the parent of the element have a 
     background image set to them it's not going to get apply to the border.
  */
  const elementBgc = getComputedStyleValue(
    element,
    'background-color',
  ) as string;
  const outsideBorderElement = document.createElement('div');
  const outsideBorderElementDesign = {
    height: '100%',
    width: '100%',
    borderRadius: 'inherit',
    border: 'inherit',
    borderColor: `${elementBgc}`,
    position: 'absolute',
    left: `${offset}`,
    top: `${offset}`,
    zIndex: '-3',
  };
  Object.assign(outsideBorderElement.style, outsideBorderElementDesign);
  return outsideBorderElement;
}

function backgroundElement(element: HTMLElement): HTMLDivElement {
  // ISSUE: this is going to return a transparent background if the element didn't have a specific background set on them
  // causing this backgroundElement to also have a transparent background
  const elementBgc = getComputedStyleValue(
    element,
    'background-color',
  ) as string;
  const elementBg = getComputedStyleValue(element, 'background') as string;
  const background = document.createElement('div');
  const backgroundStyle = {
    height: '100%',
    width: '100%',
    borderRadius: 'inherit',
    position: 'absolute',
    inset: '0',
    backgroundColor: elementBgc,
    background: elementBg,
    zIndex: '-2',
  };
  Object.assign(background.style, backgroundStyle);
  return background;
}

export { addInsetBorder };
