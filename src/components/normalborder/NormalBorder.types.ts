import { BorderOptions, DivProps } from '../../types';

export type NormalBorderProps = {
  children?: React.ReactNode;
} & BorderOptions<'Color' | 'Style' | 'Width'> &
  DivProps;
