import { Meta, StoryObj } from '@storybook/react/*';
import FancyBorder from './FancyBorder';

const meta: Meta<typeof FancyBorder> = {
  component: FancyBorder,
};

export default meta;

export const FancyBorderWithProps: StoryObj<typeof FancyBorder> = {
  render: () => (
    <FancyBorder
      borderColor="red"
      borderWidth="5px"
      borderStyle="double"
      style={{
        width: 'max-content',
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </FancyBorder>
  ),
};

export const FancyBorderDefault: StoryObj<typeof FancyBorder> = {
  render: () => (
    <FancyBorder
      style={{
        width: 'max-content',
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </FancyBorder>
  ),
};
