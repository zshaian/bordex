import React, { forwardRef } from 'react';
import { OverlapBorderProps } from './OverlapBorder.types';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';
import './OverlapBorder.css';

const overlapBorderDefaultOptions = {
  borderWidth: BORDER_SIZE.sm,
  borderStyle: 'solid',
  borderColor: COLOR_THEME.primary,
} satisfies OverlapBorderProps;

const OverlapBorder = forwardRef<HTMLDivElement, OverlapBorderProps>(
  (props, ref) => {
    const {
      children,
      borderWidth = overlapBorderDefaultOptions.borderWidth,
      borderStyle = overlapBorderDefaultOptions.borderStyle,
      borderColor = overlapBorderDefaultOptions.borderColor,
      className,
      style,
      ...rest
    } = props;
    const overlapBorderStyle = {
      borderWidth,
      borderStyle,
      borderColor,
    } as React.CSSProperties;
    const BORDER_OFFSET = '40px';
    return (
      <div
        style={{ ...overlapBorderStyle, ...style }}
        className={`overlap-border-parent-position ${className}`}
        {...rest}
        ref={ref}
      >
        <div
          style={{
            inset: `calc(0px - (${BORDER_OFFSET} + ${borderWidth})) calc(${BORDER_OFFSET} - ${borderWidth})`,
          }}
          className="offset-border"
        ></div>
        {children}
      </div>
    );
  },
);

export default OverlapBorder;
