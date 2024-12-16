import { forwardRef } from 'react';

import type { GradientBorderProps } from '../types/type';
import { DEFAULT_BORDER_SIZE, DEFAULT_COLOR_THEME } from '../themes/theme';
import BorderContainer from './BorderContainer';

const defaultGradientBorderProps = {
  angle: '45deg',
  colors: [DEFAULT_COLOR_THEME.primary, DEFAULT_COLOR_THEME.secondary],
  borderWidth: DEFAULT_BORDER_SIZE.sm,
} satisfies GradientBorderProps;

const GradientBorder = forwardRef<HTMLDivElement, GradientBorderProps>(
  (props, ref) => {
    const {
      angle,
      colors,
      borderWidth,
      borderTopWidth,
      borderRightWidth,
      borderBottomWidth,
      borderLeftWidth,
      ...rest
    } = { ...defaultGradientBorderProps, ...props };

    return (
      <BorderContainer ref={ref} {...rest}>
        <GradientBorderElement
          angle={angle}
          colors={colors}
          borderWidth={borderWidth}
          borderTopWidth={borderTopWidth}
          borderRightWidth={borderRightWidth}
          borderBottomWidth={borderBottomWidth}
          borderLeftWidth={borderLeftWidth}
        />
        {props.children}
      </BorderContainer>
    );
  },
);

const GradientBorderElement: React.FC<GradientBorderProps> = props => {
  const borderSpecificWidthList = [
    props.borderTopWidth,
    props.borderRightWidth,
    props.borderBottomWidth,
    props.borderLeftWidth,
  ];
  const borderTotalWidth = borderSpecificWidthList
    .map(borderWidth => `-${borderWidth ?? props.borderWidth}`)
    .join(' ');
  return (
    <div
      style={{
        background: `linear-gradient(${props.angle},${props.colors?.join(',')})`,
        position: 'absolute',
        inset: borderTotalWidth,
        zIndex: '-2',
      }}
    ></div>
  );
};

export default GradientBorder;
