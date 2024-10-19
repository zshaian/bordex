import { BorderOptionsOptional, BorderStyle } from './types/borderstyle';
import { colorTheme } from './utils/defaultstyle';

/** add a generic pre styled border to an element
 * @param {HTMLElement} element - The element to add a border
 * @param {BorderStyle} elementBorderStyle - The style of the border e.g. "solid", "double", "dotted", etc..
 * @param {BorderOptionsOptional} elementBorderStyle - The border design properties
 * @return void
 * @example
 * const element = document.getElementById('element');
 * const anotherElement = document.getElementById('anotherElement');
 *
 * // this is going to add a border with a solid style and a color of orange
 * addGenericBorder(element,'solid',{ borderColor: 'orange' });
 *
 * // this is going to add a border with a double style, and a with a default options for border-width and border-color
 * addGenericBorder(anotherElement,'double');
 */

function addGenericBorder(
  element: HTMLElement,
  elementBorderStyle: BorderStyle,
  borderOptions: BorderOptionsOptional,
): void {
  if (!(element instanceof HTMLElement)) {
    throw new Error(
      'Invalid argument type: This function only accepts an HTML element as its first argument.',
    );
  }

  Object.assign(element.style, {
    borderStyle: elementBorderStyle,
    borderColor: colorTheme.primary,
    borderWidth: '5px',
    ...borderOptions,
  });
  return;
}

export { addGenericBorder };
