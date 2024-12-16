import { forwardRef } from 'react';

import type { FancyBorderProps } from '../types/type';
import BorderContainer from './BorderContainer';
import { DEFAULT_BORDER_SIZE, DEFAULT_COLOR_THEME } from '../themes/theme';

const defaultFancyBorderProps = {
  borderColor: DEFAULT_COLOR_THEME.primary,
  borderWidth: DEFAULT_BORDER_SIZE.sm,
  borderStyle: 'solid',
} satisfies FancyBorderProps;

const BLOCK_SIZE = '10px';

const FancyBorder = forwardRef<HTMLDivElement, FancyBorderProps>(
  (props, ref) => {
    const { borderColor, borderWidth, borderStyle, style, ...rest } = {
      ...defaultFancyBorderProps,
      ...props,
    };

    return (
      <BorderContainer
        ref={ref}
        style={{ ...style, borderColor, borderWidth, borderStyle }}
        {...rest}
      >
        <OutisdeBorder borderElementWidth={borderWidth} />
        <SideBlockBorderCollection />
        {props.children}
      </BorderContainer>
    );
  },
);

const OutisdeBorder: React.FC<{
  borderElementWidth: string | number;
}> = props => {
  const outsideBorderDistance = `calc(0px - (20px + ${props.borderElementWidth}))`;
  return (
    <div
      style={{
        position: 'absolute',
        inset: outsideBorderDistance,
        border: 'inherit',
        zIndex: '-2',
        borderRadius: 'inherit',
      }}
    ></div>
  );
};

const SideBlockBorderCollection: React.FC = () => {
  const sideBlockBorderOptions: React.CSSProperties[] = [
    { borderRight: 'inherit', borderBottom: 'inherit', top: '0', left: '0' },
    { borderLeft: 'inherit', borderBottom: 'inherit', top: '0', right: '0' },
    { borderRight: 'inherit', borderTop: 'inherit', bottom: '0', left: '0' },
    { borderLeft: 'inherit', borderTop: 'inherit', bottom: '0', right: '0' },
  ];
  return sideBlockBorderOptions.map((option, index) => (
    <SideBlockBorder key={index} {...option} />
  ));
};

const SideBlockBorder: React.FC<React.CSSProperties> = props => {
  return (
    <div
      style={{
        height: BLOCK_SIZE,
        width: BLOCK_SIZE,
        boxSizing: 'content-box',
        position: 'absolute',
        zIndex: '-3',
        ...props,
      }}
    ></div>
  );
};

export default FancyBorder;
