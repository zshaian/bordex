import { BorderOptionsSolo, DivProps } from '../../types';

export type OverlapBorderProps = {
  chilldren?: React.ReactNode;
} & BorderOptionsSolo<'Color' | 'Width' | 'Style'> &
  DivProps;
