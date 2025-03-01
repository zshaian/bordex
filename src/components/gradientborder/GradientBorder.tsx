import { forwardRef } from 'react';
import { GradientBorderProps } from './GradientBorder.types';
import './GradientBorder.css';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

const gradientBorderDefaultOptions = {
  angle: '45deg',
  colors: [COLOR_THEME.primary, COLOR_THEME.secondary],
  borderWidth: BORDER_SIZE.sm,
} satisfies GradientBorderProps;

const GradientBorder = forwardRef<HTMLDivElement, GradientBorderProps>(
  (props, ref) => {
    const {
      angle = gradientBorderDefaultOptions.angle,
      colors = gradientBorderDefaultOptions.colors,
      borderWidth = gradientBorderDefaultOptions.borderWidth,
      children,
      className,
      ...rest
    } = props;
    const gradientBorderStyle: React.CSSProperties = {
      background: `linear-gradient(${angle}, ${colors?.join(',')})`,
      inset: `-${borderWidth}`,
    };

    return (
      <div
        className={`gradient-border-parent-position ${className}`}
        {...rest}
        ref={ref}
      >
        <div style={gradientBorderStyle} className="gradient-border"></div>
        {children}
      </div>
    );
  },
);

export default GradientBorder;
