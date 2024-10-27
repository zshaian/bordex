/**
 * Clears any background styling (color, image, gradient, etc.) from the specified element.
 * @param {HTMLElement} element - The element whose background you want to remove.
 * @returns {void} No return value.
 */
function clearElementBackground(element: HTMLElement): void {
  element.style.background = 'none';
}

export { clearElementBackground };
