import { colorTheme } from './utils/defaultstyle';
import { validateHTMLElement } from './utils/validatehtmlelement';

interface IBlurBorderOptions {
  borderColor?: string;
  borderWidth?: string;
}
/**
 * add a blur border style to an element
 * @param {HTMLElement} element - The element to add the blur border
 * @param {IBlurBorderOptions} [borderOptions = {}] - Optional design properties like borderColor or borderWidth (optional, defaults to `{}`)
 * @return void
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
): void {
  validateHTMLElement(element);
  const { borderColor = colorTheme.primary, borderWidth = '20px' } =
    borderOptions;
  Object.assign(element.style, {
    boxShadow: `0px 0px 30px ${borderWidth} ${borderColor}`,
    borderStyle: 'solid',
  });
}

export { addBlurBorder };
