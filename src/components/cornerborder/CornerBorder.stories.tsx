import { Meta, StoryObj } from '@storybook/react/*';
import CornerBorder from './CornerBorder';

const meta: Meta<typeof CornerBorder> = {
  component: CornerBorder,
};

export default meta;

export const CornerBorderWithProps: StoryObj<typeof CornerBorder> = {
  render: () => (
    <CornerBorder
      borderColor="orange"
      borderWidth="5px"
      borderStyle="double"
      style={{
        width: 'max-content',
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </CornerBorder>
  ),
};

export const CornerBorderDefault: StoryObj<typeof CornerBorder> = {
  render: () => (
    <CornerBorder style={{ width: 'max-content', padding: '2rem' }}>
      <p>hello world</p>
    </CornerBorder>
  ),
};
