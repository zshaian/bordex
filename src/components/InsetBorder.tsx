import { forwardRef, useRef } from 'react';

import type { InsetBorderProps } from '../types/type';
import { useParentElementBg } from '../hooks/useParentElementBg';
import BorderContainer from './BorderContainer';
import { DEFAULT_BORDER_SIZE } from '../themes/theme';

const defaultInsetBorderProps = {
  borderOffset: '15px',
  borderStyle: 'solid',
  borderWidth: DEFAULT_BORDER_SIZE.sm,
} satisfies InsetBorderProps;

const InsetBorder = forwardRef<HTMLDivElement, InsetBorderProps>(
  (props, ref) => {
    const { borderOffset, borderStyle, borderWidth, ...rest } = {
      ...defaultInsetBorderProps,
      ...props,
    };

    return (
      <BorderContainer ref={ref} {...rest}>
        <InsideBorderElement
          borderOffset={borderOffset}
          borderStyle={borderStyle}
          borderWidth={borderWidth}
        />
        <OutsideBorderElement
          borderOffset={borderOffset}
          borderStyle={borderStyle}
          borderWidth={borderWidth}
        />
        {props.children}
      </BorderContainer>
    );
  },
);

const InsideBorderElement: React.FC<InsetBorderProps> = props => {
  const insideBorderRef = useRef<HTMLDivElement>(null);
  const [parentBg] = useParentElementBg(insideBorderRef, 'parent');

  return (
    <div
      ref={insideBorderRef}
      style={{
        height: `calc(100% - ${props.borderOffset})`,
        width: `calc(100% - ${props.borderOffset})`,
        borderRadius: 'inherit',
        borderTop: 'inherit',
        borderLeft: 'inherit',
        borderTopColor: parentBg,
        borderLeftColor: parentBg,
        position: 'absolute',
        left: `calc(${props.borderOffset} + ${props.borderWidth})`,
        top: `calc(${props.borderOffset} + ${props.borderWidth})`,
        zIndex: '-1',
      }}
    ></div>
  );
};

const OutsideBorderElement: React.FC<InsetBorderProps> = props => {
  const outsideBorderRef = useRef<HTMLDivElement>(null);
  const [parentBg] = useParentElementBg(outsideBorderRef, 'greatGrandparent');

  return (
    <div
      ref={outsideBorderRef}
      style={{
        height: `calc(100% + ${props.borderWidth})`,
        width: `calc(100% + ${props.borderWidth})`,
        borderRadius: 'inherit',
        borderColor: parentBg,
        position: 'absolute',
        left: `calc(${props.borderOffset} + ${props.borderWidth})`,
        top: `calc(${props.borderOffset} + ${props.borderWidth})`,
        zIndex: '-2',
      }}
    ></div>
  );
};

export default InsetBorder;
