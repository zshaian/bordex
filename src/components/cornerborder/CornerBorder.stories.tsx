import { Meta, StoryObj } from '@storybook/react/*';
import { BORDER_SIZE, COLOR_THEME } from '../../constants';
import CornerBorder from './CornerBorder';

const meta: Meta<typeof CornerBorder> = {
  component: CornerBorder,

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
          summary: COLOR_THEME.primary,
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

export const CornerBorderWithProps: StoryObj<typeof CornerBorder> = {
  args: {
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'double',
    borderColor: 'orange',
  },
  render: () => (
    <CornerBorder
      {...CornerBorderWithProps.args}
      style={{
        width: 'max-content',
        padding: '2rem',
      }}
    >
      <p>hello world</p>
    </CornerBorder>
  ),
};

export const CornerBorderDefault: StoryObj<typeof CornerBorder> = {
  render: () => (
    <CornerBorder style={{ width: 'max-content', padding: '2rem' }}>
      <p>hello world</p>
    </CornerBorder>
  ),
};
