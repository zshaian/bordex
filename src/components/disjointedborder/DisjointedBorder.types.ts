import { BorderOptionsSolo, CSSAngle, DivProps } from '../../types';

export type DisjointedBorderProps = {
  children?: React.ReactNode;
  angle?: CSSAngle;
} & BorderOptionsSolo<'Color'> &
  DivProps;
