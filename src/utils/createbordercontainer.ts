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

  resetCopiedElementStyles(element, borderContainerElement);

  Object.assign(borderContainerElement.style, borderContainerElementStyle);

  return borderContainerElement;
}

/**
 * Resets the styles of the element and copies specific styles (like background) into the baseElement.
 * Specifically, it resets the position and z-index to prevent conflict with the base element,
 * then copies and clears the background.
 *
 * @param {HTMLElement} element - The element whose styles will be reset.
 * @param {HTMLElement} baseElement - The element that will receive the background style from `element`.
 * @returns {void} - No return value.
 */
function resetCopiedElementStyles(
  element: HTMLElement,
  baseElement: HTMLElement,
): void {
  // Reset position and z-index to avoid style conflict with baseElement
  element.style.position = 'relative';
  element.style.zIndex = 'auto';

  // Copy background from element to baseElement, then clear element background
  copySourceBackground(element, baseElement);
  clearElementBackground(element);
}

export { borderContainerElement };
