/**
 * The default color theme to use if no other value is provided.
 */
const COLOR_THEME = {
  primary: '#960096', // Main color (purple)
  secondary: '#BFFF00', // Accent color (lime green)
} as const;

const BORDER_SIZE = {
  sm: '5px',
  md: '10px',
  lg: '20px',
} as const;

/**
 * Sets a default position of `relative` to an element if its position is currently set to `static`.
 * @param {HTMLElement} element - The element for which to set a default position.
 * @return void
 * @example
 * const element = document.getElementById('element');
 *
 * // Sets the default position to 'relative' if the element's position is 'static'
 * setElementDefaultPosition(element);
 */

const setElementDefaultPosition = (element: HTMLElement): void => {
  const elementPosition = window
    .getComputedStyle(element)
    .getPropertyValue('position');
  if (elementPosition === 'static') {
    element.style.position = 'relative';
  }
};

export { setElementDefaultPosition, COLOR_THEME, BORDER_SIZE };
