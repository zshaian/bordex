import { forwardRef } from 'react';
import type { ThinBorderProps } from '../types/type';
import BorderContainer from './BorderContainer';
import { DEFAULT_COLOR_THEME } from '../themes/theme';
import { getBorderImageSlice } from '../utils/getBorderImageSlice';

const defaultThinBorderProps = {
  color: DEFAULT_COLOR_THEME.secondary,
  outset: '0px',
  side: 'left',
} satisfies ThinBorderProps;

const ThinBorder = forwardRef<HTMLDivElement, ThinBorderProps>((props, ref) => {
  const { color, outset, side, ...rest } = {
    ...defaultThinBorderProps,
    ...props,
  };
  const isVerticalPosition = ['top', 'bottom', 'vertical'].includes(
    props.side as string,
  );
  const computedBorderImageOutset = isVerticalPosition
    ? `${outset} 0`
    : `$0 ${outset}`;

  return (
    <BorderContainer ref={ref} {...rest}>
      <div
        style={{
          borderImageSource: `linear-gradient(${isVerticalPosition ? 'to left' : 'to bottom'},rgba(0,0,0,0) 1%, ${color} 50%, rgba(0,0,0,0) 99%)`,
          borderImageOutset: computedBorderImageOutset,
          borderImageWidth: '1.5px', // width of the border, maybe adjust it later if it's too thin.
          borderImageSlice: getBorderImageSlice(side),
          position: 'absolute',
          inset: '-1.5px',
          zIndex: '-2',
        }}
      ></div>

      {props.children}
    </BorderContainer>
  );
});

export default ThinBorder;
