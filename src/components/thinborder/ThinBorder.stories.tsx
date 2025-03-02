import { Meta, StoryObj } from '@storybook/react/*';
import ThinBorder from './ThinBorder';
import { COLOR_THEME } from '../../constants';

const meta: Meta<typeof ThinBorder> = {
  component: ThinBorder,

  argTypes: {
    borderColor: {
      control: 'color',
      description: 'Color of the border',
      table: {
        defaultValue: {
          summary: COLOR_THEME.primary,
        },
      },
    },
    side: {
      control: 'text',
      description: 'Side on which the thin border is going to appear',
      table: {
        defaultValue: {
          summary: 'vertical',
        },
      },
    },
  },
};

export default meta;

export const ThinBorderWithProps: StoryObj<typeof ThinBorder> = {
  args: {
    borderColor: 'red',
    side: 'left',
  },
  render: () => (
    <ThinBorder
      {...ThinBorderWithProps.args}
      style={{
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
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </ThinBorder>
  ),
};
