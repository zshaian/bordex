import { forwardRef } from 'react';
import { StripeBorderProps } from './StripeBorder.types';
import { getStripeBorderString } from '../../utils/getStripeBorderString';
import './StripeBorder.css';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

const stripeBorderDefaultOptions = {
  angle: '45deg',
  stripeWidth: '10%',
  colors: [COLOR_THEME.primary, COLOR_THEME.secondary],
  borderWidth: BORDER_SIZE.sm,
} satisfies StripeBorderProps;

const StripeBorder = forwardRef<HTMLDivElement, StripeBorderProps>(
  (props, ref) => {
    const {
      children,
      borderWidth = stripeBorderDefaultOptions.borderWidth,
      angle = stripeBorderDefaultOptions.angle,
      stripeWidth = stripeBorderDefaultOptions.stripeWidth,
      colors = stripeBorderDefaultOptions.colors,
      className,
      ...rest
    } = props;
    const stripeBorderString = getStripeBorderString(colors, stripeWidth);
    const stripeBorderStyle: React.CSSProperties = {
      inset: `-${borderWidth}`,
      backgroundColor: 'green',
      backgroundImage: `repeating-linear-gradient(${angle},${stripeBorderString})`,
    };
    return (
      <div className={`parent-position ${className}`} {...rest} ref={ref}>
        <div style={stripeBorderStyle} className="stripe-border"></div>
        {children}
      </div>
    );
  },
);

export default StripeBorder;
