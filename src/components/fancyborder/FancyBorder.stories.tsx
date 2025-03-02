import { Meta, StoryObj } from '@storybook/react/*';
import FancyBorder from './FancyBorder';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

const meta: Meta<typeof FancyBorder> = {
  component: FancyBorder,

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
    borderWidth: {
      control: 'text',
      description: 'Color of the border',
      table: {
        defaultValue: {
          summary: BORDER_SIZE.sm,
        },
      },
    },
    borderStyle: {
      control: 'text',
      description:
        'Style of the border all the border styles that are available in "border-style" property of css are valid',
      table: {
        defaultValue: {
          summary: 'solid',
        },
      },
    },
  },
};

export default meta;

export const FancyBorderWithProps: StoryObj<typeof FancyBorder> = {
  args: {
    borderColor: COLOR_THEME.secondary,
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'double',
  },
  render: () => (
    <FancyBorder
      {...FancyBorderWithProps.args}
      style={{
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </FancyBorder>
  ),
};

export const FancyBorderDefault: StoryObj<typeof FancyBorder> = {
  render: () => (
    <FancyBorder
      style={{
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </FancyBorder>
  ),
};
