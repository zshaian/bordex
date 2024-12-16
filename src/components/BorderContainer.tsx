import { forwardRef } from 'react';

const BorderContainer = forwardRef<
  HTMLDivElement,
  { children?: React.ReactNode } & React.ComponentProps<'div'>
>(({ style, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      ...style,
      position: style?.position || 'relative',
    }}
    {...props}
  >
    <div
      style={{
        background: 'inherit',
        borderRadius: 'inherit',
        position: 'absolute',
        zIndex: '-1',
      }}
    ></div>
    {props.children}
  </div>
));

export default BorderContainer;
