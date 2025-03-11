type BorderProperties = 'Top' | 'Right' | 'Bottom' | 'Left';
type BorderOptionName = 'Width' | 'Style' | 'Color';

type BorderShortHandShorcut = {
  border?: React.CSSProperties['border'];
};

export type CSSAngle =
  | `${number}deg`
  | `${number}grad`
  | `${number}rad`
  | `${number}turn`;

export type BorderOptionsSolo<T extends BorderOptionName> = {
  [K in `border${T}`]?: React.CSSProperties[`border${T}`];
};

export type BorderShorthandOptions = {
  [K in `border${BorderProperties}`]?: React.CSSProperties[`border${BorderProperties}`];
};

export type BorderOptions<T extends BorderOptionName> = {
  [K in `border${BorderProperties}${T}`]?: React.CSSProperties[`border${BorderProperties}${T}`];
} & BorderOptionsSolo<T> &
  BorderShorthandOptions &
  BorderShortHandShorcut;

export type DivProps = React.ComponentProps<'div'>;
