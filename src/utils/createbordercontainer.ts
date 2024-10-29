import { CSSStyles } from '../types/styles.type';
import { getComputedStyleValue } from './getcomputedstylevalue';
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
  const backgroundElement = createBackgroundElement();

  borderContainer.setAttribute('class', className || '');

  insertAfterElement(element, borderContainer);
  borderContainer.append(backgroundElement, element);

  setElementPositioning(element);
  setBorderContainerPositioning(borderContainer);

  return borderContainer;
}

/**
 * Creates a background element to be used as a styled container behind the borderContainerElement.
 *
 * This function generates a new `<div>` element with styles that allow it to act as a background
 * for the border container. The background element inherits styles for background and border-radius,
 * and is positioned absolutely to cover the entire area of the border container. This helps
 * manage stacking context issues.
 *
 * @returns {HTMLDivElement} The newly created <div> element styled as a background.
 */
function createBackgroundElement(): HTMLDivElement {
  const backgroundElement = document.createElement('div');
  const backgroundElementStyle: CSSStyles = {
    background: 'inherit',
    borderRadius: 'inherit',
    position: 'absolute',
    inset: '0px',
    zIndex: 'auto',
  };
  Object.assign(backgroundElement.style, backgroundElementStyle);

  return backgroundElement;
}

/**
 * Sets the default positioning styles for a given HTML element.
 *
 * This function applies a relative position and an automatic z-index
 * to ensure that the element can be positioned correctly in relation to
 * its containing elements.
 *
 * @param {HTMLElement} element - The HTML element to which the styles will be applied.
 * @returns {void} - No return value.
 */
function setElementPositioning(element: HTMLElement): void {
  element.style.position = 'relative';
  element.style.zIndex = 'auto';
}

/**
 * Sets the positioning of the borderContainerElement by wrapping it in a new div.
 *
 * This function checks the current position of the provided border container element.
 * If the position is 'relative' or 'absolute', it does nothing. If the position is
 * 'static', it sets the position to 'relative'. If the position is any other value (fixed, sticky),
 * it creates a new wrapper element, applies the same position and inset styles,
 * and appends the border container element to this new wrapper.
 *
 * @param {HTMLDivElement} borderContainerElement - The HTML div element that acts as the border container.
 * @returns {void} - No return value.
 */
function setBorderContainerPositioning(
  borderContainerElement: HTMLDivElement,
): void {
  const borderContainerPosition = getComputedStyleValue(
    borderContainerElement,
    'position',
  ) as string;

  if (
    borderContainerPosition === 'relative' ||
    borderContainerPosition === 'absolute'
  ) {
    return;
  } else if (borderContainerPosition === 'static') {
    borderContainerElement.style.position = 'relative';
    return;
  }

  const borderContainerInset = getComputedStyleValue(
    borderContainerElement,
    'inset',
  ) as string;

  const newBorderContainerWrapper = document.createElement('div');

  newBorderContainerWrapper.style.position = borderContainerPosition;
  newBorderContainerWrapper.style.inset = borderContainerInset;

  insertAfterElement(borderContainerElement, newBorderContainerWrapper);
  clearBorderContainerElementPosition(borderContainerElement);

  newBorderContainerWrapper.append(borderContainerElement);
}

/**
 * clear the positioning style for the borderContainerElement
 *
 * This function applies a relative position and an automatic z-index
 * to ensure that the element can be positioned correctly in relation to
 * its containing elements.
 *
 * @param {HTMLDivElement} borderContainerElement - The borderContainerElement element to which the styles will be applied.
 * @returns {void} - No return value.
 */
function clearBorderContainerElementPosition(
  borderContainerElement: HTMLDivElement,
): void {
  borderContainerElement.style.position = 'relative';
  borderContainerElement.style.inset = 'unset';
}

export { borderContainerElement };
