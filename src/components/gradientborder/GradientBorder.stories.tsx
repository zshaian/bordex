import { Meta, StoryObj } from '@storybook/react/*';
import GradientBorder from './GradientBorder';

const meta: Meta<typeof GradientBorder> = {
  component: GradientBorder,
};

export default meta;

export const GradientBorderWithProps: StoryObj<typeof GradientBorder> = {
  render: () => (
    <GradientBorder
      angle="45deg"
      colors={['red', 'green', 'blue']}
      borderWidth="5px"
    >
      <p>helllo world</p>
    </GradientBorder>
  ),
};

export const GradientBorderDefault: StoryObj<typeof GradientBorder> = {
  render: () => (
    <GradientBorder>
      <p>helllo world</p>
    </GradientBorder>
  ),
};
