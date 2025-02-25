import { BorderOptions, DivProps } from '../../types';

export type BlurBorderProps = {
  children?: React.ReactNode;
  borderBlur?: string;
} & DivProps &
  BorderOptions<'Width' | 'Color'>;
