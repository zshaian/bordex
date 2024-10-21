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
  };

  Object.assign(borderContainerElement.style, borderContainerElementStyle);

  return borderContainerElement;
}

export { borderContainerElement };
