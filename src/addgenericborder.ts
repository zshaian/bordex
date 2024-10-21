import {
  BorderOptionsOptional,
  CommonBorderStyles,
  borderStyles,
} from './types/borderstyle';
import { BORDER_SIZE, COLOR_THEME } from './utils/defaultstyle';
import { validateHTMLElement } from './utils/validatehtmlelement';

/** add a generic pre styled border to an element
 * @param {HTMLElement} element - The element to add a border
 * @param {CommonBorderStyles} borderStyle - The style of the border (e.g. "solid", "double", "dotted", etc.)
 * @param {BorderOptionsOptional} [borderOptions = {}] - Optional design properties like borderColor or borderWidth (optional, defaults to `{}`)
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
  borderStyle: CommonBorderStyles,
  borderOptions: BorderOptionsOptional = {},
): void {
  validateHTMLElement(element);
  if (!borderStyles.includes(borderStyle)) {
    throw new Error(
      `Invalid border style: the second argument must be one of the CommonBorderStyles ${[borderStyles.join(', ')]}`,
    );
  }

  Object.assign(element.style, {
    borderStyle,
    borderColor: COLOR_THEME.primary,
    borderWidth: BORDER_SIZE.sm,
    ...borderOptions,
  });

  return;
}

export { addGenericBorder };
