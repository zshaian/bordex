import { forwardRef } from 'react';
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
      borderColor,
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
        style={{
          borderWidth,
          borderTopWidth,
          borderRightWidth,
          borderBottomWidth,
          borderLeftWidth,
          borderColor,
          borderStyle,
        }}
        {...rest}
        ref={ref}
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
      zIndex: '-1',
    }}
  >
    ,
  </div>
);

export default OverlapBorder;
