import { Meta, StoryObj } from '@storybook/react/*';
import ThinBorder from './ThinBorder';

const meta: Meta<typeof ThinBorder> = {
  component: ThinBorder,
};

export default meta;

export const ThinBorderWithProps: StoryObj<typeof ThinBorder> = {
  render: () => (
    <ThinBorder
      borderColor="red"
      side="left"
      style={{
        width: 'max-content',
        padding: '1rem',
      }}
    >
      <p>hello world</p>
    </ThinBorder>
  ),
};

export const ThinBorderDefault: StoryObj<typeof ThinBorder> = {
  render: () => (
    <ThinBorder
      style={{
        width: 'max-content',
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </ThinBorder>
  ),
};
