import { forwardRef } from 'react';

import type { DisjointedBorderProps } from '../types/type';
import { DEFAULT_COLOR_THEME } from '../themes/theme';
import BorderContainer from './BorderContainer';

const defaultDisjointedBorderProps = {
  angle: '45deg',
  borderColor: DEFAULT_COLOR_THEME.primary,
} satisfies DisjointedBorderProps;

const DEFAULT_BORDER_OFFSET = '-0.1rem';

const DisjointedBorder = forwardRef<HTMLDivElement, DisjointedBorderProps>(
  (props, ref) => {
    const { angle, borderColor, ...rest } = {
      ...defaultDisjointedBorderProps,
      ...props,
    };
    return (
      <BorderContainer ref={ref} {...rest}>
        <DisjointedBorderElement angle={angle} borderColor={borderColor} />
        {props.children}
      </BorderContainer>
    );
  },
);

const DisjointedBorderElement: React.FC<DisjointedBorderProps> = (
  props: DisjointedBorderProps,
) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: DEFAULT_BORDER_OFFSET,
        borderRadius: 'inherit',
        zIndex: '-2',
        background: `linear-gradient(${props.angle},#00000000 1%,${props.borderColor},#00000000 99%)`,
      }}
    ></div>
  );
};

export default DisjointedBorder;
