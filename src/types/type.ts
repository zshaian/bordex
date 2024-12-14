// extra types
type CSSAngle =
  | `${number}deg`
  | `${number}rad`
  | `${number}grad`
  | `${number}turn`;

type Sides = 'top' | 'right' | 'bottom' | 'left' | 'vertical' | 'horizontal';

// main types
type BorderProperties = 'Top' | 'Right' | 'Bottom' | 'Left';

type BorderOption<T extends 'Width' | 'Style' | 'Color'> = {
  [K in `border${BorderProperties}${T}`]?: React.CSSProperties[`border${BorderProperties}${T}`];
};

interface BorderWidthProps extends BorderOption<'Width'> {
  borderWidth?: React.CSSProperties['borderWidth'];
}

interface BorderStyleProps extends BorderOption<'Style'> {
  borderStyle?: React.CSSProperties['borderStyle'];
}

interface BorderColorProps extends BorderOption<'Color'> {
  borderColor?: React.CSSProperties['borderColor'];
}

interface ShortHandBorderProps {
  border?: React.CSSProperties['border'];
  borderTop?: React.CSSProperties['borderTop'];
  borderRight?: React.CSSProperties['borderRight'];
  borderBottom?: React.CSSProperties['borderBottom'];
  borderLeft?: React.CSSProperties['borderLeft'];
}

type FullBorderProps = BorderWidthProps & BorderStyleProps & BorderColorProps;

type BlurBorderProps = {
  borderColor?: BorderColorProps['borderColor'];
  borderWidth?: BorderWidthProps['borderWidth'];
  borderBlur?: string;
  children?: React.ReactNode;
};

type CornerBorderProps = {
  borderColor?: BorderColorProps['borderColor'];
  borderWidth?: BorderWidthProps['borderWidth'];
  borderStyle?: BorderStyleProps['borderStyle'];
  children?: React.ReactNode;
};

type DisjointedBorderProps = {
  angle?: CSSAngle;
  borderColor?: BorderColorProps['borderColor'];
  children?: React.ReactNode;
};

type FancyBorderProps = {
  borderWidth?: BorderWidthProps['borderWidth'];
  borderColor?: BorderColorProps['borderColor'];
  borderStyle?: BorderStyleProps['borderStyle'];
  children?: React.ReactNode;
};

type GenericBorderProps = {
  children?: React.ReactNode;
} & FullBorderProps;

type GradientBorderProps = {
  angle?: CSSAngle;
  colors?: React.CSSProperties['color'][];
  children?: React.ReactNode;
} & BorderWidthProps;

type InsetBorderProps = {
  borderOffset?: React.CSSProperties['width'];
  borderWidth?: BorderWidthProps['borderWidth'];
  borderStyle?: BorderStyleProps['borderStyle'];
  children?: React.ReactNode;
};

type OverlapBorderProps = {
  children?: React.ReactNode;
} & BorderWidthProps &
  BorderStyleProps &
  BorderColorProps;

type StripesBorderProps = {
  stripeWidth?: string;
  colors?: React.CSSProperties['color'][];
  children?: React.ReactNode;
} & BorderWidthProps;

type ThinBorderProps = {
  color?: React.CSSProperties['color'];
  side?: Sides;
  outset?: string;
  children?: React.ReactNode;
};

export type {
  BlurBorderProps,
  CornerBorderProps,
  DisjointedBorderProps,
  FancyBorderProps,
  GenericBorderProps,
  GradientBorderProps,
  InsetBorderProps,
  OverlapBorderProps,
  StripesBorderProps,
  ThinBorderProps,
  Sides,
  BorderWidthProps,
  BorderStyleProps,
  BorderColorProps,
  ShortHandBorderProps,
  FullBorderProps,
};
