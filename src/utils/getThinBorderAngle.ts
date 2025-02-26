type ThinBorderSide =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'horizontal'
  | 'vertical';

export function getThinBorderAngle(
  side: ThinBorderSide,
): 'to bottom' | 'to left' {
  const isSideOnYAxis =
    side === 'top' || side === 'bottom' || side === 'vertical';
  return isSideOnYAxis ? 'to left' : 'to bottom';
}
