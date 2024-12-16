import { forwardRef, useMemo } from 'react';

import type { BlurBorderProps } from '../types/type';
import { DEFAULT_COLOR_THEME, DEFAULT_BORDER_SIZE } from '../themes/theme';

const defaultBlurBorderProps = {
  borderWidth: DEFAULT_BORDER_SIZE.sm,
  borderBlur: '20px',
  borderColor: DEFAULT_COLOR_THEME.primary,
} satisfies BlurBorderProps;

const BlurBorder = forwardRef<HTMLDivElement, BlurBorderProps>((props, ref) => {
  const { borderBlur, borderWidth, borderColor, style, ...rest } = {
    ...defaultBlurBorderProps,
    ...props,
  };

  const blurBorderStyleValue = `${borderBlur} ${borderWidth} ${borderColor}`;

  const blurBorderStyle: React.CSSProperties = useMemo(
    () => ({
      boxShadow: `0px 0px  ${blurBorderStyleValue}`,
    }),
    [blurBorderStyleValue],
  );

  return (
    <div ref={ref} style={{ ...style, ...blurBorderStyle }} {...rest}>
      {props.children}
    </div>
  );
});

export default BlurBorder;
