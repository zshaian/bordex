import { insertAfterElement } from './insertafterelement';
import { validateHTMLElement } from './validatehtmlelement';

/**
 * Wraps the specified HTML element in a `div` that acts as a styled container.
 *
 * @param {HTMLElement} element - The HTML element to be wrapped.
 * @param {string} [className] - Optional class name to apply custom CSS styling to the container.
 * @throws {Error} Throws an error if the provided `element` is not a valid HTML element.
 * @returns {HTMLDivElement} The newly created `div` element styled as a container.
 * @example
 * const element = document.getElementById('element');
 * const borderContainer = borderContainerElement(element, 'my-custom-class');
 * document.body.appendChild(borderContainer);
 */
function borderContainerElement(
  element: HTMLElement,
  className?: string,
): HTMLDivElement {
  validateHTMLElement(element);

  const borderContainer = document.createElement('div');

  const borderContainerStyle: Partial<CSSStyleDeclaration> = {
    color: 'white',
    background: 'black',
    position: 'relative', // needed for absolue child positioning
  };

  borderContainer.setAttribute('class', className || '');

  Object.assign(borderContainer.style, borderContainerStyle);

  insertAfterElement(element, borderContainer);
  borderContainer.append(element);

  return borderContainer;
}

export { borderContainerElement };
