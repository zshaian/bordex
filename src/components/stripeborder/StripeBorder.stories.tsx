import { Meta, StoryObj } from '@storybook/react/*';
import StripeBorder from './StripeBorder';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

const meta: Meta<typeof StripeBorder> = {
  component: StripeBorder,

  argTypes: {
    borderWidth: {
      control: 'text',
      description: 'Width of the border',
      table: {
        defaultValue: {
          summary: BORDER_SIZE.sm,
        },
      },
    },
    stripeWidth: {
      control: 'number',
      description:
        'Width of the stripe border the number that you type is in (%) percent unit in css',
      table: {
        defaultValue: {
          summary: '10',
        },
      },
    },
    angle: {
      control: 'text',
      description:
        'Angle of the gradient border must be a valid angle unit in css',
      table: {
        defaultValue: {
          summary: '45deg',
        },
      },
    },
    colors: {
      control: 'object',
      description: 'List of colors in the stripeWidth',
      table: {
        defaultValue: {
          summary: `[${COLOR_THEME.primary},${COLOR_THEME.secondary}]`,
        },
      },
    },
  },
};

export default meta;

export const StripeBorderWithProps: StoryObj<typeof StripeBorder> = {
  args: {
    borderWidth: '5px',
    stripeWidth: 10,
    angle: '45deg',
    colors: ['red', 'orange', 'lightblue'],
  },
  render: () => (
    <StripeBorder
      {...StripeBorderWithProps.args}
      style={{
        padding: '2rem',
        color: COLOR_THEME.secondary,
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
        padding: '2rem',
        color: COLOR_THEME.secondary,
      }}
    >
      <p>hello world</p>
    </StripeBorder>
  ),
};
