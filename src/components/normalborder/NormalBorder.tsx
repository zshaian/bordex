import { forwardRef } from 'react';
import { NormalBorderProps } from './NormalBorder.types';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';
const normalBorderDefaultOptions = {
  border: `${BORDER_SIZE.sm} solid ${COLOR_THEME.primary}`,
  borderWidth: BORDER_SIZE.sm,
  borderStyle: 'solid',
  borderColor: COLOR_THEME.primary,
} satisfies NormalBorderProps;

const NormalBorder = forwardRef<HTMLDivElement, NormalBorderProps>(
  (props, ref) => {
    const {
      border = normalBorderDefaultOptions.border,
      borderWidth = normalBorderDefaultOptions.borderWidth,
      borderStyle = normalBorderDefaultOptions.borderStyle,
      borderColor = normalBorderDefaultOptions.borderColor,

      borderTop = border,
      borderTopWidth = borderWidth,
      borderTopStyle = borderStyle,
      borderTopColor = borderColor,

      borderRight = border,
      borderRightWidth = borderWidth,
      borderRightStyle = borderStyle,
      borderRightColor = borderColor,

      borderBottom = border,
      borderBottomWidth = borderWidth,
      borderBottomStyle = borderStyle,
      borderBottomColor = borderColor,

      borderLeft = border,
      borderLeftWidth = borderWidth,
      borderLeftStyle = borderStyle,
      borderLeftColor = borderColor,
      children,
      style,
      ...rest
    } = props;
    const normalBorderStyle = {
      border,
      borderWidth,
      borderStyle,
      borderColor,

      borderTop,
      borderTopWidth,
      borderTopStyle,
      borderTopColor,

      borderRight,
      borderRightWidth,
      borderRightStyle,
      borderRightColor,

      borderBottom,
      borderBottomWidth,
      borderBottomStyle,
      borderBottomColor,

      borderLeft,
      borderLeftWidth,
      borderLeftStyle,
      borderLeftColor,
    } as React.CSSProperties;

    return (
      <div style={{ ...normalBorderStyle, ...style }} {...rest} ref={ref}>
        {children}
      </div>
    );
  },
);

export default NormalBorder;
