import { Meta, StoryObj } from '@storybook/react/*';
import OverlapBorder from './OverlapBorder';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';

const meta: Meta<typeof OverlapBorder> = {
  component: OverlapBorder,

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

export const OverlapBorderWithProps: StoryObj<typeof OverlapBorder> = {
  args: {
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'solid',
    borderColor: COLOR_THEME.secondary,
  },
  render: () => (
    <OverlapBorder
      {...OverlapBorderWithProps.args}
      style={{
        padding: '2rem',
        color: COLOR_THEME.secondary,
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
        padding: '2rem',
        color: COLOR_THEME.secondary,
      }}
    >
      <p>hello world</p>
    </OverlapBorder>
  ),
};
