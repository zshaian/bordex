import { IGradientBorderOptions, CSSStyles } from '../types';
import { COLOR_THEME } from '../utils';
import { addGradientBorder } from './addgradientborder';

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
