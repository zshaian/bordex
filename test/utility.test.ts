import {
  getStripeBorderString,
  getThinBorderAngle,
  getThinBorderSide,
} from '../src/utils';

type GetStripeBorderProps = {
  colors: React.CSSProperties['color'][];
  stripeWidth: number;
};

describe('return the correct repeating linear  gradient string with a stripe pattern base on the array of the colors', () => {
  it('should return the correct repeating linear gradient string', () => {
    const { colors, stripeWidth }: GetStripeBorderProps = {
      colors: ['red', 'green', 'orange'],
      stripeWidth: 10,
    };
    const stripeGradientStringResult =
      'red 0%,red 10%,green 10%,green 20%,orange 20%,orange 30%';
    expect(getStripeBorderString(colors, stripeWidth)).toBe(
      stripeGradientStringResult,
    );
  });
});

describe('return the angle of the gradient of the thin border', () => {
  it('should return a string "to bottom"', () => {
    expect(getThinBorderAngle('left')).toBe('to bottom');
  });
  it('should return a string "to bottom"', () => {
    expect(getThinBorderAngle('horizontal')).toBe('to bottom');
  });

  it('should return a string "to left"', () => {
    expect(getThinBorderAngle('top')).toBe('to left');
  });
  it('should return a string "to left"', () => {
    expect(getThinBorderAngle('vertical')).toBe('to left');
  });
});

describe('return the side on where the thin border should be place', () => {
  it('should return  100% 0 0 0', () => {
    expect(getThinBorderSide('top')).toBe('100% 0 0 0');
  });
  it('should return  0 0 100% 0', () => {
    expect(getThinBorderSide('bottom')).toBe('0 0 100% 0');
  });

  it('should return  0 100% 0 0', () => {
    expect(getThinBorderSide('right')).toBe('0 100% 0 0');
  });
  it('should return  0 0 0 100%', () => {
    expect(getThinBorderSide('left')).toBe('0 0 0 100%');
  });
});
