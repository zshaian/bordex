import type { Sides } from '../types/type';

function getBorderImageSlice(side: Sides): string {
  switch (side) {
    case 'left':
      return '0 0 0 100%';
    case 'right':
      return '0 100% 0 0';
    case 'top':
      return '100% 0 0 0';
    case 'bottom':
      return '0 0 100% 0';
    case 'horizontal':
      return '0 100% 0 100%';
    case 'vertical':
      return '100% 0 100% 0';
    default:
      return '0 0 0 100%'; // Fallback case (though it should not hit this due to validation)
  }
}

export { getBorderImageSlice };
