import { Meta, StoryObj } from '@storybook/react/*';
import StripeBorder from './StripeBorder';

const meta: Meta<typeof StripeBorder> = {
  component: StripeBorder,
};

export default meta;

export const StripeBorderWithProps: StoryObj<typeof StripeBorder> = {
  render: () => (
    <StripeBorder
      borderWidth="5px"
      stripeWidth={10}
      angle="45deg"
      colors={['red', 'orange', 'lightblue']}
      style={{
        width: 'max-content',
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </StripeBorder>
  ),
};

export const StripeBorderDefault: StoryObj<typeof StripeBorder> = {
  render: () => (
    <StripeBorder
      style={{
        width: 'max-content',
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </StripeBorder>
  ),
};
