import React, { forwardRef } from 'react';
import type { OverlapBorderProps } from '../types/type';
import BorderContainer from './BorderContainer';
import { DEFAULT_BORDER_SIZE, DEFAULT_COLOR_THEME } from '../themes/theme';

const defaultOverlapBorderProps = {
  borderWidth: DEFAULT_BORDER_SIZE.sm,
  borderStyle: 'solid',
  borderColor: DEFAULT_COLOR_THEME.primary,
} satisfies OverlapBorderProps;

const OverlapBorder = forwardRef<HTMLDivElement, OverlapBorderProps>(
  (props, ref) => {
    const {
      borderWidth,
      borderTopWidth = borderWidth,
      borderRightWidth = borderWidth,
      borderBottomWidth = borderWidth,
      borderLeftWidth = borderWidth,
      borderStyle,
      borderTopStyle = borderStyle as React.CSSProperties['borderTopStyle'],
      borderRightStyle = borderStyle as React.CSSProperties['borderRightStyle'],
      borderBottomStyle = borderStyle as React.CSSProperties['borderBottomStyle'],
      borderLeftStyle = borderStyle as React.CSSProperties['borderLeftStyle'],
      borderColor,
      borderTopColor = borderColor,
      borderRightColor = borderColor,
      borderBottomColor = borderColor,
      borderLeftColor = borderColor,
      style,
      ...rest
    } = {
      ...defaultOverlapBorderProps,
      ...props,
    };

    const offset = '40px';
    const vertical = `calc(${borderTopWidth} + ${borderBottomWidth})`;
    const horizontal = `calc(${borderLeftWidth} + ${borderRightWidth})`;

    return (
      <BorderContainer
        ref={ref}
        style={{
          ...style,
          borderWidth,
          borderTopWidth,
          borderRightWidth,
          borderBottomWidth,
          borderLeftWidth,
          borderStyle,
          borderTopStyle,
          borderRightStyle,
          borderBottomStyle,
          borderLeftStyle,
          borderColor,
          borderTopColor,
          borderRightColor,
          borderBottomColor,
          borderLeftColor,
        }}
        {...rest}
      >
        <OutsideBorderElement
          outsideBorderElementOffset={offset}
          verticalBorderWidth={vertical}
          horizontalBorderWidth={horizontal}
        />
        {props.children}
      </BorderContainer>
    );
  },
);

const OutsideBorderElement: React.FC<{
  outsideBorderElementOffset: string;
  horizontalBorderWidth: string;
  verticalBorderWidth: string;
}> = props => (
  <div
    style={{
      boxSizing: 'content-box',
      border: 'inherit',
      borderRadius: 'inherit',
      position: 'absolute',
      inset: `calc(0px - (${props.outsideBorderElementOffset} + ${props.horizontalBorderWidth})) calc(${props.outsideBorderElementOffset} - ${props.horizontalBorderWidth})`,
      zIndex: '-2',
    }}
  ></div>
);

export default OverlapBorder;
