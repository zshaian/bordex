type ElementPosition = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

/**
 * Get the current position of the element.
 * If the element's position is `static`, this function will return `relative` instead.
 * @param {HTMLElement} element - The element to get the position
 * @returns {ElementPosition} The current position value of the element (`'relative'` if originally `'static'`).
 */
function getElementPosition(element: HTMLElement): ElementPosition {
  const elementPosition = window
    .getComputedStyle(element)
    .getPropertyValue('position') as ElementPosition;
  return elementPosition === 'static' ? 'relative' : elementPosition;
}

export { getElementPosition };
