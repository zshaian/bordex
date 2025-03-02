import { forwardRef } from 'react';
import type { GlowingGradientBorderProps } from './GlowingGradientBorder.types';
import GradientBorder from '../gradientborder';
import './GlowingGradientBorder.css';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

const glowingGradientDefaultOptions = {
  angle: '45deg',
  colors: [COLOR_THEME.primary, COLOR_THEME.secondary],
  borderWidth: BORDER_SIZE.sm,
} satisfies GlowingGradientBorderProps;

const GlowingGradientBorder = forwardRef<
  HTMLDivElement,
  GlowingGradientBorderProps
>((props, ref) => {
  const {
    angle = glowingGradientDefaultOptions.angle,
    colors = glowingGradientDefaultOptions.colors,
    borderWidth = glowingGradientDefaultOptions.borderWidth,
    children,
    ...rest
  } = props;
  const glowingGradientBorderStyle: React.CSSProperties = {
    inset: `-${borderWidth}`,
    background: `linear-gradient(${angle},${colors.join(',')})`,
  };
  return (
    <GradientBorder
      angle={angle}
      colors={colors}
      borderWidth={borderWidth}
      {...rest}
      ref={ref}
    >
      <div
        style={glowingGradientBorderStyle}
        className="glowing-gradient-border"
      ></div>
      {children}
    </GradientBorder>
  );
});

export default GlowingGradientBorder;
