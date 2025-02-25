import { BorderOptionsSolo, DivProps } from '../../types';

export type FancyBorderProps = {
  children?: React.ReactNode;
} & BorderOptionsSolo<'Width' | 'Style' | 'Color'> &
  DivProps;
