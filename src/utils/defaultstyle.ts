interface IColorTheme {
  primary: string;
  secondary: string;
}

const colorTheme: IColorTheme = {
  primary: '#960096',
  secondary: '#BFFF00',
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

export { setElementDefaultPosition, colorTheme };
