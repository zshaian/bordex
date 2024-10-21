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

type BorderColorOptional = Partial<IBorderColor>;
type BorderWidthOptional = Partial<IBorderWidth>;

type BorderOptions = IBorderWidth & IBorderColor;
type BorderOptionsOptional = Partial<BorderOptions>;

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

type FullBorderOptions = BorderOptionsOptional & {
  borderStyle?: CommonBorderStyles;
};

export {
  IBorderColor,
  IBorderWidth,
  BorderColorOptional,
  BorderWidthOptional,
  BorderOptions,
  BorderOptionsOptional,
  CommonBorderStyles,
  FullBorderOptions,
  borderStyles,
};
