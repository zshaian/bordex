import { IGradientBorderOptions, CSSStyles } from '../types';
import { COLOR_THEME } from '../utils';
import { addGradientBorder } from './addgradientborder';

/**
 * Add a glowing gradient border to an element.
 * @param {HTMLElement} element - The element to add a gradient border to.
 * @param {IGradientBorderOptions} [borderOptions={}] - The border options (`angle`, `colors`, `borderWidth`, etc.).
 * @param {string} [className] - Optional class name to apply custom CSS styling to the container.
 * @throws {Error} Will throw an error if the first argument is not an HTML element.
 * @returns {HTMLDivElement} The container element wrapping the original element with the glowing gradient border applied.
 *
 * @example
 * const element = document.getElementById('element');
 * const anotherElement = document.getElementById('anotherElement');
 *
 * // Add glowing gradient border to the element with default options
 * addGradientBorder(element);
 *
 * // Add a gradient border to the element with a gradient angle of 20deg,
 * // with a glowing gradient color of "red", "orange", and "purple",
 * // and a border width of 10px
 * addGradientBorder(anotherElement, { angle: '20deg',colors:['red', 'orange', 'purple'], borderWidth: '10px' });
 */
function addGlowingGradientBorder(
  element: HTMLElement,
  borderOptions: IGradientBorderOptions = {},
  className?: string,
): HTMLDivElement {
  const defaultGradientColors = [COLOR_THEME.primary, COLOR_THEME.secondary];
  const { angle = '45deg', colors = defaultGradientColors } = borderOptions;
  const GRADIENT_BORDER_BLUR = '20px';

  const gradientBorderContainer = addGradientBorder(
    element,
    borderOptions,
    className,
  );

  const glowingGradientBorderElement = document.createElement('div');

  const glowingGradientBorderStyle: CSSStyles = {
    background: `linear-gradient(${angle},${colors.join(', ')})`,
    position: 'absolute',
    inset: '0',
    zIndex: '-1',
    filter: `blur(${GRADIENT_BORDER_BLUR})`,
  };

  Object.assign(glowingGradientBorderElement.style, glowingGradientBorderStyle);

  gradientBorderContainer.append(glowingGradientBorderElement);

  return gradientBorderContainer;
}

export { addGlowingGradientBorder };
