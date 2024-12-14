import { forwardRef, useMemo } from 'react';
import type { CornerBorderProps, ShortHandBorderProps } from '../types/type';
import { DEFAULT_BORDER_SIZE, DEFAULT_COLOR_THEME } from '../themes/theme';
import BorderContainer from './BorderContainer';

const defaultCornerBorderProps = {
  borderWidth: DEFAULT_BORDER_SIZE.sm,
  borderColor: DEFAULT_COLOR_THEME.primary,
  borderStyle: 'solid',
} satisfies CornerBorderProps;

const CornerBorder = forwardRef<HTMLDivElement, CornerBorderProps>(
  (props, ref) => {
    const { borderWidth, borderColor, borderStyle, ...rest } = {
      ...defaultCornerBorderProps,
      ...props,
    };
    const border = `${borderWidth} ${borderColor} ${borderStyle}`;
    const cornerBorderOptions: React.CSSProperties[] = useMemo(
      () => [
        createCornerBorderOptions('Top', 'Left', border),
        createCornerBorderOptions('Top', 'Right', border),
        createCornerBorderOptions('Bottom', 'Left', border),
        createCornerBorderOptions('Bottom', 'Right', border),
      ],
      [border],
    );

    return (
      <BorderContainer ref={ref} {...rest}>
        {cornerBorderOptions.map((options, index) => (
          <CornerBorderElement key={`corner-${index}`} {...options} />
        ))}
        {props.children}
      </BorderContainer>
    );
  },
);

const CornerBorderElement: React.FC = (props: React.CSSProperties) => {
  return (
    <div
      style={{ height: '40%', width: '20%', position: 'absolute', ...props }}
    ></div>
  );
};

const createCornerBorderOptions = (
  vertical: 'Top' | 'Bottom',
  horizontal: 'Left' | 'Right',
  border: ShortHandBorderProps['border'],
): React.CSSProperties => {
  return {
    [vertical]: 0,
    [horizontal]: 0,
    [`border${vertical}${horizontal}Radius`]: 'inherit',
    [`border${vertical}`]: border,
    [`border${horizontal}`]: border,
  };
};

export default CornerBorder;
