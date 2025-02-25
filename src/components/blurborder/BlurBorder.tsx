import { forwardRef } from 'react';
import { BlurBorderProps } from './BlurBorder.types';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

const BlurBorderDefaultOptions = {
  borderBlur: '10px',
  borderWidth: BORDER_SIZE.md,
  borderColor: COLOR_THEME.primary,
} satisfies BlurBorderProps;

const BlurBorder = forwardRef<HTMLDivElement, BlurBorderProps>((props, ref) => {
  const {
    children,
    borderColor = BlurBorderDefaultOptions.borderColor,
    borderWidth = BlurBorderDefaultOptions.borderWidth,
    borderBlur = BlurBorderDefaultOptions.borderBlur,
    style,
    ...rest
  } = props;
  return (
    <div
      style={{
        boxShadow: `0px 0px ${borderBlur} ${borderWidth} ${borderColor}`,
        ...style,
      }}
      {...rest}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default BlurBorder;
