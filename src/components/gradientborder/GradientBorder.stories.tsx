import { Meta, StoryObj } from '@storybook/react/*';
import GradientBorder from './GradientBorder';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

const meta: Meta<typeof GradientBorder> = {
  component: GradientBorder,

  argTypes: {
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
      descripttion: 'List of the colors for gradient',
      table: {
        defaultValue: {
          summary: `[${COLOR_THEME.primary},${COLOR_THEME.secondary}]`,
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
  },
};

export default meta;

export const GradientBorderWithProps: StoryObj<typeof GradientBorder> = {
  args: {
    angle: '45deg',
    colors: ['red', 'green', 'blue'],
    borderWidth: BORDER_SIZE.sm,
  },
  render: () => (
    <GradientBorder
      {...GradientBorderWithProps.args}
      style={{ padding: '2rem', color: COLOR_THEME.secondary }}
    >
      <p>helllo world</p>
    </GradientBorder>
  ),
};

export const GradientBorderDefault: StoryObj<typeof GradientBorder> = {
  render: () => (
    <GradientBorder style={{ padding: '2rem', color: COLOR_THEME.secondary }}>
      <p>helllo world</p>
    </GradientBorder>
  ),
};
