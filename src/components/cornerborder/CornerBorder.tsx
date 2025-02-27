import { forwardRef } from 'react';
import { CornerBorderProps } from './CornerBorder.types';
import './CornerBorder.css';
import { COLOR_THEME } from '../../constants';

const cornerBorderDefaultOptions = {
  borderWidth: '5px',
  borderStyle: 'solid',
  borderColor: COLOR_THEME.primary,
} satisfies CornerBorderProps;

const CornerBorder = forwardRef<HTMLDivElement, CornerBorderProps>(
  (props, ref) => {
    const {
      children,
      borderWidth = cornerBorderDefaultOptions.borderWidth,
      borderStyle = cornerBorderDefaultOptions.borderStyle,
      borderColor = cornerBorderDefaultOptions.borderColor,
      className,
      ...rest
    } = props;
    const cornerBorderStyle = {
      borderWidth,
      borderStyle,
      borderColor,
    } as React.CSSProperties;
    return (
      <div className={`parent-position ${className}`} {...rest} ref={ref}>
        <div
          style={cornerBorderStyle}
          className="corner-borders top-left-corner-border"
        ></div>
        <div
          style={cornerBorderStyle}
          className="corner-borders top-right-corner-border"
        ></div>
        <div
          style={cornerBorderStyle}
          className="corner-borders bottom-left-corner-border"
        ></div>
        <div
          style={cornerBorderStyle}
          className="corner-borders bottom-right-corner-border"
        ></div>
        {children}
      </div>
    );
  },
);

export default CornerBorder;
