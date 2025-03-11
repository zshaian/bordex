import { BorderOptionsSolo, DivProps } from '../../types';

export type CornerBorderProps = {
  children?: React.ReactNode;
} & BorderOptionsSolo<'Color' | 'Style' | 'Width'> &
  DivProps;
