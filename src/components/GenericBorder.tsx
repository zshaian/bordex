import { forwardRef } from 'react';

import BorderContainer from './BorderContainer';
import type { GenericBorderProps } from '../types/type';
import { DEFAULT_BORDER_SIZE, DEFAULT_COLOR_THEME } from '../themes/theme';

const defaultGenericBorderProps = {
  borderWidth: DEFAULT_BORDER_SIZE.sm,
  borderColor: DEFAULT_COLOR_THEME.primary,
  borderStyle: 'solid',
} satisfies GenericBorderProps;

const GenericBorder = forwardRef<HTMLDivElement, GenericBorderProps>(
  (props, ref) => {
    const {
      borderWidth,
      borderTopWidth,
      borderRightWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderColor,
      borderTopColor,
      borderRightColor,
      borderBottomColor,
      borderLeftColor,
      borderStyle,
      borderTopStyle,
      borderRightStyle,
      borderBottomStyle,
      borderLeftStyle,
      ...rest
    } = {
      ...defaultGenericBorderProps,
      ...props,
    };
    return (
      <BorderContainer ref={ref} {...rest}>
        <div
          style={{
            borderWidth,
            borderTopWidth,
            borderRightWidth,
            borderBottomWidth,
            borderLeftWidth,
            borderColor,
            borderTopColor,
            borderRightColor,
            borderBottomColor,
            borderLeftColor,
            borderStyle,
            borderTopStyle,
            borderRightStyle,
            borderBottomStyle,
            borderLeftStyle,
          }}
        >
          {props.children}
        </div>
      </BorderContainer>
    );
  },
);

export default GenericBorder;
