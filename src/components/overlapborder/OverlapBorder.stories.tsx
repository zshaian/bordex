import { Meta, StoryObj } from '@storybook/react/*';
import OverlapBorder from './OverlapBorder';

const meta: Meta<typeof OverlapBorder> = {
  component: OverlapBorder,
};

export default meta;

export const OverlapBorderWithProps: StoryObj<typeof OverlapBorder> = {
  render: () => (
    <OverlapBorder
      borderWidth="5px"
      borderStyle="solid"
      borderColor="black"
      style={{
        width: 'max-content',
        padding: '2rem',
        backgroundColor: 'orange',
      }}
    >
      <p>hello world</p>
    </OverlapBorder>
  ),
};

export const OverlapBorderDefault: StoryObj<typeof OverlapBorder> = {
  render: () => (
    <OverlapBorder
      style={{
        width: 'max-content',
        padding: '2rem',
        backgroundColor: 'orange',
      }}
    >
      <p>hello world</p>
    </OverlapBorder>
  ),
};
