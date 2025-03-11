type ThinBorderSide =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'horizontal'
  | 'vertical';

export function getThinBorderSide(side: ThinBorderSide): string {
  switch (side) {
    case 'top':
      return '100% 0 0 0';
    case 'left':
      return '0 0 0 100%';
    case 'bottom':
      return '0 0 100% 0';
    case 'right':
      return '0 100% 0 0';
    case 'horizontal':
      return '0 100% 0 100%';
    case 'vertical':
      return '100% 0 100% 0';
    default:
      return '0 0 0 100%';
  }
}
