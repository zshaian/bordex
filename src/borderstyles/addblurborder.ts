import { COLOR_THEME, validateHTMLElement } from '../utils';
import { IBlurBorderOptions } from '../types';

/**
 * add a blur border style to an element
 * @param {HTMLElement} element - The element to add the blur border
 * @param {IBlurBorderOptions} [borderOptions = {}] - Optional design properties like borderColor or borderWidth (optional, defaults to `{}`)
 * @returns {HTMLElement} The Element with the applied blur border.
 *
 * @example
 * const element = document.getElementById('element');
 * const anotherElement = document.getElementById('anotherElement');
 *
 * //add a blur border to an element with a default style
 * addBlurBorder(element)
 *
 * // add a blur border to an element with a color of violet and with a width of 30px
 * addBlurBorder(anotherElement,{ borderCololr:'violet', borderWidth:'30px' })
 */
function addBlurBorder(
  element: HTMLElement,
  borderOptions: IBlurBorderOptions = {},
): HTMLElement {
  validateHTMLElement(element);
  const { borderColor = COLOR_THEME.primary, borderWidth = '20px' } =
    borderOptions;
  Object.assign(element.style, {
    boxShadow: `0px 0px 10px ${borderWidth} ${borderColor}`,
  });

  return element;
}

export { addBlurBorder };
