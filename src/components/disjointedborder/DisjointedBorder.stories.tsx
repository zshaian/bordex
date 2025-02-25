import { Meta, StoryObj } from '@storybook/react/*';
import DisjointedBorder from './DisjointedBorder';

const meta: Meta<typeof DisjointedBorder> = {
  component: DisjointedBorder,
};

export default meta;

export const DisjointedBorderWithProps: StoryObj<typeof DisjointedBorder> = {
  render: () => (
    <DisjointedBorder
      borderColor="red"
      angle="45deg"
      style={{ padding: '0.5rem', width: 'max-content' }}
    >
      <p>hello world</p>
    </DisjointedBorder>
  ),
};

export const DisjointedBorderDefault: StoryObj<typeof DisjointedBorder> = {
  render: () => (
    <DisjointedBorder style={{ padding: '0.5rem', width: 'max-content' }}>
      <p>hello world</p>
    </DisjointedBorder>
  ),
};
