import { BorderOptionsSolo, CSSAngle, DivProps } from '../../types';

export type StripeBorderProps = {
  children?: React.ReactNode;
  angle?: CSSAngle;
  stripeWidth?: string;
  colors?: React.CSSProperties['color'][];
} & BorderOptionsSolo<'Width'> &
  DivProps;
