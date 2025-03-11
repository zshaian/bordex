import { BorderOptionsSolo, CSSAngle, DivProps } from '../../types';

export type StripeBorderProps = {
  children?: React.ReactNode;
  angle?: CSSAngle;
  stripeWidth?: number;
  colors?: React.CSSProperties['color'][];
} & BorderOptionsSolo<'Width'> &
  DivProps;
