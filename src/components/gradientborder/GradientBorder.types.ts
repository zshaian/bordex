import { BorderOptionsSolo, CSSAngle, DivProps } from '../../types';

export type GradientBorderProps = {
  children?: React.ReactNode;
  colors?: React.CSSProperties['color'][];
  angle?: CSSAngle;
} & BorderOptionsSolo<'Width'> &
  DivProps;
