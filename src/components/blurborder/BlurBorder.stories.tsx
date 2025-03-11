import { Meta, StoryObj } from '@storybook/react/*';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

import BlurBorder from './BlurBorder';

const meta: Meta<typeof BlurBorder> = {
  component: BlurBorder,

  argTypes: {
    borderBlur: {
      control: 'text',
      description: 'Blur value  in px unit',
      table: {
        defaultValue: {
          summary: '10px',
        },
      },
    },
    borderWidth: {
      control: 'text',
      description: 'Width of the border',
      table: {
        defaultValue: {
          summary: BORDER_SIZE.sm,
        },
      },
    },
    borderColor: {
      control: 'color',
      description: 'Color of the border',
      table: {
        defaultValue: {
          summary: COLOR_THEME.primary,
        },
      },
    },
  },
};

export default meta;

export const SmallBlurBorder: StoryObj<typeof BlurBorder> = {
  args: {
    borderBlur: '10px',
    borderWidth: BORDER_SIZE.md,
    borderColor: 'orange',
  },
  render: () => (
    <BlurBorder
      {...SmallBlurBorder.args}
      style={{ padding: '2rem', color: COLOR_THEME.secondary }}
    >
      <p>hello world</p>
    </BlurBorder>
  ),
};
