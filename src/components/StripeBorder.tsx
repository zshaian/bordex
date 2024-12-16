import { forwardRef } from 'react';
import type { BorderWidthProps, StripesBorderProps } from '../types/type';
import BorderContainer from './BorderContainer';
import { DEFAULT_BORDER_SIZE, DEFAULT_COLOR_THEME } from '../themes/theme';
import { createGradientString } from '../utils/createGradientString';

const defaultStripesBorderProps = {
  colors: [DEFAULT_COLOR_THEME.primary, DEFAULT_COLOR_THEME.secondary],
  borderWidth: DEFAULT_BORDER_SIZE.md,
} satisfies StripesBorderProps;

const StripesBorder = forwardRef<HTMLDivElement, StripesBorderProps>(
  (props, ref) => {
    const {
      colors,
      borderWidth,
      borderTopWidth = borderWidth,
      borderRightWidth = borderWidth,
      borderBottomWidth = borderWidth,
      borderLeftWidth = borderWidth,
      stripeWidth = parseInt(props.stripeWidth || '10', 10),
      ...rest
    } = { ...defaultStripesBorderProps, ...props };

    const stripeGradientString = createGradientString(
      stripeWidth as number,
      colors,
    );

    return (
      <BorderContainer {...rest} ref={ref}>
        <StripeBorderElement
          borderTopWidth={borderTopWidth}
          borderRightWidth={borderRightWidth}
          borderBottomWidth={borderBottomWidth}
          borderLeftWidth={borderLeftWidth}
          stripeGradientString={stripeGradientString}
        />
        {props.children}
      </BorderContainer>
    );
  },
);

const StripeBorderElement: React.FC<
  BorderWidthProps & { stripeGradientString: string }
> = props => (
  <div
    style={{
      position: 'absolute',
      inset: `-${props.borderTopWidth} -${props.borderRightWidth} -${props.borderBottomWidth} -${props.borderLeftWidth}`,
      borderRadius: 'inherit',
      background: `repeating-linear-gradient(45deg,${props.stripeGradientString})`,
      zIndex: '-2',
    }}
  ></div>
);

export default StripesBorder;
