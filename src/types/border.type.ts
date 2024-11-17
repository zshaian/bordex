import { IPositions, IBorderRadius } from './';

const borderStyles = [
  'solid',
  'double',
  'dotted',
  'dashed',
  'outset',
  'inset',
  'groove',
  'ridge',
] as const;

type CommonBorderStyles = (typeof borderStyles)[number];

interface IBorderColor {
  borderLeftColor: string;
  borderRightColor: string;
  borderBottomColor: string;
  borderTopColor: string;
  borderColor: string;
}

interface IBorderWidth {
  borderLeftWidth: string;
  borderRightWidth: string;
  borderBottomWidth: string;
  borderTopWidth: string;
  borderWidth: string;
}

interface IBorderStyle {
  borderLeftStyle: CommonBorderStyles;
  borderRightStyle: CommonBorderStyles;
  borderBottomStyle: CommonBorderStyles;
  borderTopStyle: CommonBorderStyles;
  borderStyle: CommonBorderStyles;
}

interface IShorthandBorderOptions {
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: CommonBorderStyles;
}

interface IShorthandBorder {
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
}

type BorderColorOptional = Partial<IBorderColor>;
type BorderWidthOptional = Partial<IBorderWidth>;
type BorderStyleOptional = Partial<IBorderStyle>;

type BorderOptions = IBorderWidth & IBorderColor & IBorderStyle;
type BorderOptionsOptional = Partial<BorderOptions>;

type FullBorderOptions = BorderOptionsOptional;

type CornerBorderOptions = IShorthandBorder & IPositions & IBorderRadius;

type ThinBorderSides =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'horizontal'
  | 'vertical';

interface IThinBorder {
  color?: string;
  side?: ThinBorderSides;
  outset?: string;
}

export {
  IBorderColor,
  IBorderWidth,
  IBorderStyle,
  IShorthandBorderOptions,
  IShorthandBorder,
  BorderColorOptional,
  BorderWidthOptional,
  BorderStyleOptional,
  BorderOptions,
  BorderOptionsOptional,
  CommonBorderStyles,
  FullBorderOptions,
  borderStyles,
  ThinBorderSides,
  IThinBorder,
  CornerBorderOptions,
};
