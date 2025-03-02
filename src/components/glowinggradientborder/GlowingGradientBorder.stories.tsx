import { Meta, StoryObj } from '@storybook/react/*';
import GlowingGradientBorder from './GlowingGradientBorder';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

const meta: Meta<typeof GlowingGradientBorder> = {
  component: GlowingGradientBorder,

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
      description: 'List of the colors for gradient',
      table: {
        defaultValue: {
          summary: `[${COLOR_THEME.primary}, ${COLOR_THEME.secondary}]`,
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

export const GlowingGradientBorderWithProps: StoryObj<
  typeof GlowingGradientBorder
> = {
  args: {
    angle: '45deg',
    colors: ['violet', 'pink', 'orange', 'yellow'],
    borderWidth: '5px',
  },
  render: () => (
    <GlowingGradientBorder
      {...GlowingGradientBorderWithProps.args}
      style={{
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </GlowingGradientBorder>
  ),
};

export const GlowingGradientBorderDefault: StoryObj<
  typeof GlowingGradientBorder
> = {
  render: () => (
    <GlowingGradientBorder
      style={{
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </GlowingGradientBorder>
  ),
};
