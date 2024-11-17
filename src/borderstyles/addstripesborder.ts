import { IStripeBorderOptions, CSSStyles } from '../types';
import { borderContainerElement, BORDER_SIZE, COLOR_THEME } from '../utils';

/**
 * Add a striped border to an element.
 *
 * @param {HTMLElement} element - The element to add the striped border to.
 * @param {IStripeBorderOptions} borderOptions - Optional border settings, including color, width, and stripe width.
 * @param {string} [className] - Optional class name to apply custom CSS styling to the container.
 * @returns {HTMLDivElement} The container element wrapping the original element with the corner border applied.
 *
 * @example
 * const element = document.getElementById('element');
 * const anotherElement = document.getElementById('anotherElement');
 *
 * // Add stripe border to the element with default options
 * addStripeBorder(element);
 *
 * // Add a stripe border to the element with a provided options
 * addFancyBorder(anotherElement, { stripeWidth:'40px' ,borderWidth: '20px', colors: ['red','orange'] });
 */

function addStripeBorder(
  element: HTMLElement,
  borderOptions: IStripeBorderOptions = {},
  className?: string,
): HTMLDivElement {
  const borderContainer = borderContainerElement(element, className);
  const stripeBorder = stripeBorderElement(borderOptions);

  borderContainer.append(stripeBorder);

  return borderContainer;
}

/**
 * Creates a div element styled to display a repeating gradient stripe pattern.
 *
 * @param {IStripeBorderOptions} borderOptions - Options for stripe width, colors, and border widths.
 * @returns {HTMLDivElement} The div element representing the stripe border.
 */
function stripeBorderElement(
  borderOptions: IStripeBorderOptions,
): HTMLDivElement {
  const stripeBorder = document.createElement('div');
  const defaultStripeWidth = parseInt(borderOptions.stripeWidth || '10', 10);
  const {
    colors = [COLOR_THEME.primary, COLOR_THEME.secondary],
    borderWidth = BORDER_SIZE.md,
    borderTopWidth = borderWidth,
    borderLeftWidth = borderWidth,
    borderBottomWidth = borderWidth,
    borderRightWidth = borderWidth,
  } = borderOptions;

  const stripeGradientString = createGradientString(defaultStripeWidth, colors);

  const stripeBorderStyle: CSSStyles = {
    position: 'absolute',
    inset: `-${borderTopWidth} -${borderLeftWidth} -${borderBottomWidth} -${borderRightWidth}`,
    borderRadius: 'inherit',
    background: `repeating-linear-gradient(45deg,${stripeGradientString})`,
    zIndex: '-1',
  };

  Object.assign(stripeBorder.style, stripeBorderStyle);
  return stripeBorder;
}

/**
 * Generates a gradient string for the background property, creating a stripe effect
 * based on the provided colors and stripe width.
 *
 * @param {number} stripeWidth - The width of each color stripe in the gradient.
 * @param {string[]} colors - Array of colors to create alternating stripes.
 * @returns {string} A gradient string for use in CSS.
 */
function createGradientString(stripeWidth: number, colors: string[]): string {
  let gradientString = '';
  for (let i = 0; i < colors.length; i++) {
    const position = stripeWidth * i;
    const nextPosition = stripeWidth * (i + 1);

    gradientString += `${colors[i]} ${position}px, ${colors[i]} ${nextPosition}px, `;
  }
  return gradientString.slice(0, -2);
}

export { addStripeBorder };
