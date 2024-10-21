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

type BorderColorOptional = Partial<IBorderColor>;
type BorderWidthOptional = Partial<IBorderWidth>;
type BorderStyleOptional = Partial<IBorderStyle>;

type BorderOptions = IBorderWidth & IBorderColor & IBorderStyle;
type BorderOptionsOptional = Partial<BorderOptions>;

type FullBorderOptions = BorderOptionsOptional;

export {
  IBorderColor,
  IBorderWidth,
  IBorderStyle,
  BorderColorOptional,
  BorderWidthOptional,
  BorderStyleOptional,
  BorderOptions,
  BorderOptionsOptional,
  CommonBorderStyles,
  FullBorderOptions,
  borderStyles,
};
