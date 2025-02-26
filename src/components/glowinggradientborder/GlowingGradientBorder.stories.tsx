import { Meta, StoryObj } from '@storybook/react/*';
import GlowingGradientBorder from './GlowingGradientBorder';

const meta: Meta<typeof GlowingGradientBorder> = {
  component: GlowingGradientBorder,
};

export default meta;

export const GlowingGradientBorderWithProps: StoryObj<
  typeof GlowingGradientBorder
> = {
  render: () => (
    <GlowingGradientBorder
      angle="45deg"
      colors={['violet', 'pink', 'orange', 'yellow']}
      borderWidth="5px"
      style={{
        width: 'max-content',
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </GlowingGradientBorder>
  ),
};

export const GlowingGradientBorderDefault: StoryObj<
  typeof GlowingGradientBorder
> = {
  render: () => (
    <GlowingGradientBorder
      style={{
        width: 'max-content',
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </GlowingGradientBorder>
  ),
};
