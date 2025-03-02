import { Meta, StoryObj } from '@storybook/react/*';
import NormalBorder from './NormalBorder';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

const meta: Meta<typeof NormalBorder> = {
  component: NormalBorder,

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
    borderColor: {
      control: 'color',
      description: 'Color of the border',
      table: {
        defaultValue: {
          summary: COLOR_THEME.secondary,
        },
      },
    },
    borderStyle: {
      control: 'text',
      description:
        'Style of the border all the border styles that are available in "border-style" property of css are valid',
      table: {
        defaultValue: {
          summary: COLOR_THEME.secondary,
        },
      },
    },
  },
};

export default meta;

export const NormalBorderWithProps: StoryObj<typeof NormalBorder> = {
  args: {
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'double',
    borderColor: COLOR_THEME.secondary,
  },
  render: () => (
    <NormalBorder
      {...NormalBorderWithProps.args}
      style={{
        padding: '2rem',
        color: COLOR_THEME.secondary,
      }}
    >
      <p>hello world</p>
    </NormalBorder>
  ),
};

export const NormalBorderDefault: StoryObj<typeof NormalBorder> = {
  render: () => (
    <NormalBorder
      style={{
        padding: '2rem',
        color: COLOR_THEME.secondary,
      }}
    >
      <p>hello world</p>
    </NormalBorder>
  ),
};
