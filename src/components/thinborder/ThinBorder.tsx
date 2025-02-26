import { forwardRef } from 'react';
import { ThinBorderProps } from './ThinBorder.types';
import { getThinBorderAngle, getThinBorderSide } from '../../utils';
import './ThinBorder.css';
import { COLOR_THEME } from '../../constants';

const thinBorderDefault = {
  side: 'vertical',
  borderColor: COLOR_THEME.secondary,
} satisfies ThinBorderProps;

const ThinBorder = forwardRef<HTMLDivElement, ThinBorderProps>((props, ref) => {
  const {
    side = thinBorderDefault.side,
    borderColor = thinBorderDefault.borderColor,
    children,
    className,
    ...rest
  } = props;
  const THIN_BORDER_IMAGE_WIDTH = '1.5px';
  const borderSide = getThinBorderSide(side);
  const thinBorderAngle = getThinBorderAngle(side);
  console.log(borderSide, thinBorderAngle);
  const thinBorderStyle: React.CSSProperties = {
    borderImageSource: `linear-gradient(${thinBorderAngle}, rgba(0,0,0,0) 1%, ${borderColor} 50%, rgba(0,0,0,0) 99%)`,
    borderImageWidth: THIN_BORDER_IMAGE_WIDTH,
    borderImageOutset: THIN_BORDER_IMAGE_WIDTH,
    borderImageSlice: borderSide,
  };

  return (
    <div className={`parent-position ${className}`} {...rest} ref={ref}>
      <div style={thinBorderStyle} className="thin-border"></div>
      {children}
    </div>
  );
});

export default ThinBorder;
