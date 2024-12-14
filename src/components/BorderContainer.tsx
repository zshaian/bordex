import { forwardRef } from 'react';

const BorderContainer = forwardRef<
  HTMLDivElement,
  { children?: React.ReactNode } & React.ComponentProps<'div'>
>((props, ref) => (
  <div ref={ref} {...props}>
    <div style={{ backgroundColor: 'inherit', position: 'relative' }}>
      {props.children}
    </div>
  </div>
));

export default BorderContainer;
