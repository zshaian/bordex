/**
 * this will set the background of the element to transparent.
 * @param {HTMLElement} element - The element that you want to set the background to transparent.
 * @returns {void} No return value.
 */
function clearElementBackground(element: HTMLElement): void {
  element.style.backgroundColor = 'transparent';
  element.style.background = 'none';
}

export { clearElementBackground };
