import { forwardRef } from 'react';
import type { BlurBorderProps } from './BlurBorder.types';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';
import './BlurBorder.css';

const blurBorderDefaultOptions = {
  borderBlur: '10px',
  borderWidth: BORDER_SIZE.md,
  borderColor: COLOR_THEME.primary,
} satisfies BlurBorderProps;

const BlurBorder = forwardRef<HTMLDivElement, BlurBorderProps>((props, ref) => {
  const {
    children,
    borderColor = blurBorderDefaultOptions.borderColor,
    borderWidth = blurBorderDefaultOptions.borderWidth,
    borderBlur = blurBorderDefaultOptions.borderBlur,
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
