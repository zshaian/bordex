import { forwardRef } from 'react';
import { FancyBorderProps } from './FancyBorder.types';
import './FancyBorder.css';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

const fancyBorderDefaultOpttions = {
  borderWidth: BORDER_SIZE.sm,
  borderStyle: 'solid',
  borderColor: COLOR_THEME.primary,
} satisfies FancyBorderProps;

const FancyBorder = forwardRef<HTMLDivElement, FancyBorderProps>(
  (props, ref) => {
    const {
      borderWidth = fancyBorderDefaultOpttions.borderWidth,
      borderStyle = fancyBorderDefaultOpttions.borderStyle,
      borderColor = fancyBorderDefaultOpttions.borderColor,
      style,
      className,
      children,
      ...rest
    } = props;
    const fancyBorderStyle = {
      borderWidth,
      borderStyle,
      borderColor,
    } as React.CSSProperties;

    return (
      <div
        style={{ ...fancyBorderStyle, ...style }}
        className={`fancy-border-parent-position ${className}`}
        {...rest}
        ref={ref}
      >
        <div
          className="fancy-outside-border"
          style={{ inset: `calc(0px - (10px + ${borderWidth}))` }}
        ></div>
        <div className="fancy-corner-borders fancy-top-left-corner-border"></div>
        <div className="fancy-corner-borders fancy-top-right-corner-border"></div>
        <div className="fancy-corner-borders fancy-bottom-left-corner-border"></div>
        <div className="fancy-corner-borders fancy-bottom-right-corner-border"></div>
        {children}
      </div>
    );
  },
);

export default FancyBorder;
