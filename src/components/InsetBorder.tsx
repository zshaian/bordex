import { forwardRef } from 'react';

import type { InsetBorderProps } from '../types/type';
import BorderContainer from './BorderContainer';
import { DEFAULT_BORDER_SIZE, DEFAULT_COLOR_THEME } from '../themes/theme';

const defaultInsetBorderProps = {
  borderOffset: '15px',
  borderStyle: 'solid',
  borderWidth: DEFAULT_BORDER_SIZE.sm,
  borderColor: 'transparent',
  insideBorderColor: DEFAULT_COLOR_THEME.primary,
  outsideBorderColor: DEFAULT_COLOR_THEME.secondary,
} satisfies InsetBorderProps;

const InsetBorder = forwardRef<HTMLDivElement, InsetBorderProps>(
  (props, ref) => {
    const {
      borderOffset,
      borderStyle,
      borderWidth,
      borderColor,
      insideBorderColor,
      outsideBorderColor,
      style,
      ...rest
    } = {
      ...defaultInsetBorderProps,
      ...props,
    };

    return (
      <BorderContainer
        ref={ref}
        style={{
          ...style,
          borderColor,
          borderStyle,
          borderWidth,
          isolation: 'isolate',
        }}
        {...rest}
      >
        <InsideBorderElement
          borderOffset={borderOffset}
          borderStyle={borderStyle}
          borderWidth={borderWidth}
          insideBorderColor={insideBorderColor}
        />
        <OutsideBorderElement
          borderOffset={borderOffset}
          borderStyle={borderStyle}
          borderWidth={borderWidth}
          outsideBorderColor={outsideBorderColor}
        />
        {props.children}
      </BorderContainer>
    );
  },
);

const InsideBorderElement: React.FC<InsetBorderProps> = props => {
  return (
    <div
      style={{
        height: `calc(100% - ${props.borderOffset})`,
        width: `calc(100% - ${props.borderOffset})`,
        borderRadius: 'inherit',
        borderTop: 'inherit',
        borderLeft: 'inherit',
        borderTopColor: props.insideBorderColor,
        borderLeftColor: props.insideBorderColor,
        position: 'absolute',
        left: `calc(${props.borderOffset} + ${props.borderWidth})`,
        top: `calc(${props.borderOffset} + ${props.borderWidth})`,
        zIndex: '-1',
      }}
    ></div>
  );
};

const OutsideBorderElement: React.FC<InsetBorderProps> = props => {
  return (
    <div
      style={{
        height: `calc(100% + ${props.borderWidth})`,
        width: `calc(100% + ${props.borderWidth})`,
        borderRadius: 'inherit',
        borderColor: props.outsideBorderColor,
        position: 'absolute',
        left: `calc(${props.borderOffset} + ${props.borderWidth})`,
        top: `calc(${props.borderOffset} + ${props.borderWidth})`,
        zIndex: '-2',
      }}
    ></div>
  );
};

export default InsetBorder;
