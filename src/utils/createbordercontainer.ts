import { clearElementBackground } from './clearelementbackground';
import { copySourceBackground } from './copybaseelementbackground';
import { getComputedStyleValue } from './getcomputedstylevalue';
import { getElementPosition } from './getelementposition';

/**
 * Creates a new `div` element that acts as a border container for the provided element.
 * The newly created `div` will have styles such as `width`, `borderRadius`, and `position`
 * derived from the provided element's computed styles.
 *
 * @param {HTMLElement} element - The HTML element for which to create a border container.
 * @returns {HTMLDivElement} The newly created `div` element styled as a border container.
 *
 * @example
 * const element = document.getElementById('element');
 * const borderContainer = borderContainerElement(element);
 *
 * document.body.appendChild(borderContainer);
 */
function borderContainerElement(element: HTMLElement): HTMLDivElement {
  const borderContainerElement = document.createElement('div');

  const borderContainerElementStyle = {
    // FIXME: Find a way to set the right width to the border container instead of just setting it to max-content
    width: 'max-content',
    borderRadius: getComputedStyleValue(element, 'border-radius'),
    position: getElementPosition(element),
    zIndex: getComputedStyleValue(element, 'z-index'),
  };
  /* reset all the style properties of the element, that get copied,
     into the borderContainerElmement.
  */
  resetCopiedElementStyles(element, borderContainerElement);

  Object.assign(borderContainerElement.style, borderContainerElementStyle);

  return borderContainerElement;
}

// TODO: document this function.
function resetCopiedElementStyles(
  element: HTMLElement,
  baseElement: HTMLElement,
): void {
  /*
    sets the position and z-index of an element to relative, because the border container element already
    have the same position and z-index value of the element.
  */
  element.style.position = 'relative';
  element.style.zIndex = 'auto';

  copySourceBackground(element, baseElement); // copy the background of element to the border container element.
  clearElementBackground(element); // clear the background of the element (cause we just copied it to the border container element).
}

export { borderContainerElement };
