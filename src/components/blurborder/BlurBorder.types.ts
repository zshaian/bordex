import { BorderOptionsSolo, DivProps } from '../../types';

export type BlurBorderProps = {
  children?: React.ReactNode;
  borderBlur?: string;
} & DivProps &
  BorderOptionsSolo<'Width' | 'Color'>;
