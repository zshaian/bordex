import { BorderWidthOptional, CommonBorderStyles } from './';

interface IBlurBorderOptions {
  borderColor?: string;
  borderWidth?: string;
}

interface IDisjointedBorderOptions {
  angle?: string;
  borderColor?: string;
}

interface IGradientBorderOptions extends BorderWidthOptional {
  angle?: string;
  colors?: string[];
}

interface IInsetBorderOptions extends BorderWidthOptional {
  borderOffset?: string;
  borderStyle?: CommonBorderStyles;
}

interface IStripeBorderOptions extends BorderWidthOptional {
  stripeWidth?: string;
  colors?: string[];
}

export {
  IBlurBorderOptions,
  IDisjointedBorderOptions,
  IGradientBorderOptions,
  IInsetBorderOptions,
  IStripeBorderOptions,
};
