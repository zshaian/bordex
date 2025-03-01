import { forwardRef } from 'react';
import { DisjointedBorderProps } from './DisjointedBorder.types';
import './DisjointedBorder.css';
import { COLOR_THEME } from '../../constants';

const DEFAULT_BORDER_OFFSET = '-0.1rem';

const disjointedBorderDefaultOptions = {
  angle: '45deg',
  borderColor: COLOR_THEME.primary,
} satisfies DisjointedBorderProps;

const DisjointedBorder = forwardRef<HTMLDivElement, DisjointedBorderProps>(
  (props, ref) => {
    const {
      angle = disjointedBorderDefaultOptions.angle,
      borderColor = disjointedBorderDefaultOptions.borderColor,
      className,
      children,
      ...rest
    } = props;
    const DisjointedBorderStyle: React.CSSProperties = {
      inset: `${DEFAULT_BORDER_OFFSET}`,
      borderRadius: 'inherit',
      background: `linear-gradient(${angle},#00000000 1%, ${borderColor},#00000000 99%)`,
      zIndex: '-1',
    };
    return (
      <div
        className={`disjointed-parent-initial-design ${className}`}
        {...rest}
        ref={ref}
      >
        <div style={DisjointedBorderStyle} className="disjointed-border"></div>
        {children}
      </div>
    );
  },
);

export default DisjointedBorder;
