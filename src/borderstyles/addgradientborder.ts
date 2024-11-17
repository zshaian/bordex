import { IGradientBorderOptions, CSSStyles } from '../types';
import {
  borderContainerElement,
  BORDER_SIZE,
  COLOR_THEME,
  getComputedStyleValue,
} from '../utils';

/**
 * Add a gradient border to an element.
 * @param {HTMLElement} element - The element to add a gradient border to.
 * @param {IGradientBorderOptions} [borderOptions={}] - The border options (`angle`, `colors`, `borderWidth`, etc.).
 * @param {string} [className] - Optional class name to apply custom CSS styling to the container.
 * @throws {Error} Will throw an error if the first argument is not an HTML element.
 * @returns {HTMLDivElement} The container element wrapping the original element with the gradient border applied.
 *
 * @example
 * const element = document.getElementById('element');
 * const anotherElement = document.getElementById('anotherElement');
 *
 * // Add gradient border to the element with default options
 * addGradientBorder(element);
 *
 * // Add a gradient border to the element with a gradient angle of 20deg,
 * // and a border width of 10px
 * addGradientBorder(anotherElement, { angle: '20deg', borderWidth: '10px' });
 */
function addGradientBorder(
  element: HTMLElement,
  borderOptions: IGradientBorderOptions = {},
  className?: string,
): HTMLDivElement {
  const borderContainer = borderContainerElement(element, className);

  const borderContainerBackground = getComputedStyleValue(
    borderContainer,
    'background-color',
  ) as string;

  Object.assign(
    borderContainer.style,
    gradientBorder(borderContainerBackground, borderOptions),
  );

  return borderContainer;
}

function gradientBorder(
  elementBackground: string,
  borderOptions: IGradientBorderOptions,
) {
  const defaultGradientColors = [COLOR_THEME.primary, COLOR_THEME.secondary];

  const {
    angle = '45deg',
    colors = defaultGradientColors,
    borderWidth = BORDER_SIZE.sm,
    ...borderWidths
  } = borderOptions;

  const gradientBorderStyle: CSSStyles = {
    background: `linear-gradient(${elementBackground},${elementBackground}) padding-box, linear-gradient(${angle},${colors.join(',')}) border-box`,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderWidth,
    ...borderWidths,
  };

  return gradientBorderStyle;
}

export { addGradientBorder };
