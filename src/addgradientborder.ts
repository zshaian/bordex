import { BorderWidthOptional } from './types/border.type';
import { CSSStyles } from './types/styles';
import { borderContainerElement } from './utils/createbordercontainer';
import { BORDER_SIZE, COLOR_THEME } from './utils/defaultstyle';
import { getComputedStyleValue } from './utils/getcomputedstylevalue';

interface IGradientBorderOptions extends BorderWidthOptional {
  angle?: string;
  colors?: string[];
}

/**
 * Add a gradient border to an element.
 * @param {HTMLElement} element - The element to add a gradient border to.
 * @param {IGradientBorderOptions} [borderOptions={}] - The border options (`angle`, `colors`, `borderWidth`, etc.).
 * @throws {Error} Will throw an error if the first argument is not an HTML element.
 * @returns {void}
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
): void {
  const borderContainer = borderContainerElement(element);

  const borderContainerBackground = getComputedStyleValue(
    borderContainer,
    'background-color',
  ) as string;

  Object.assign(
    borderContainer.style,
    gradientBorder(borderContainerBackground, borderOptions),
  );
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
