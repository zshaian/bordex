import { Meta, StoryObj } from '@storybook/react/*';
import NormalBorder from './NormalBorder';

const meta: Meta<typeof NormalBorder> = {
  component: NormalBorder,
};

export default meta;

export const NormalBorderWithProps: StoryObj<typeof NormalBorder> = {
  render: () => (
    <NormalBorder
      borderWidth="10px"
      borderStyle="double"
      borderColor="orange"
      style={{
        width: 'max-content',
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </NormalBorder>
  ),
};

export const NormalBorderDefault: StoryObj<typeof NormalBorder> = {
  render: () => (
    <NormalBorder
      style={{
        width: 'max-content',
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </NormalBorder>
  ),
};
