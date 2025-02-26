import { BorderOptionsSolo, DivProps } from '../../types';

export type ThinBorderProps = {
  children?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left' | 'horizontal' | 'vertical';
} & BorderOptionsSolo<'Color'> &
  DivProps;
