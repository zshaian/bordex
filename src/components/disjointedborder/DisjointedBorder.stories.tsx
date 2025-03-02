import { Meta, StoryObj } from '@storybook/react/*';
import DisjointedBorder from './DisjointedBorder';
import { COLOR_THEME } from '../../constants';

const meta: Meta<typeof DisjointedBorder> = {
  component: DisjointedBorder,

  argTypes: {
    angle: {
      control: 'text',
      description:
        'Angle of the disjointed border must be a valid angle unit in css',
      table: {
        defaultValue: {
          summary: '45deg',
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

export const DisjointedBorderWithProps: StoryObj<typeof DisjointedBorder> = {
  args: { borderColor: 'red', angle: '45deg' },
  render: () => (
    <DisjointedBorder
      {...DisjointedBorderWithProps.args}
      style={{ padding: '0.5rem' }}
    >
      <p>hello world</p>
    </DisjointedBorder>
  ),
};

export const DisjointedBorderDefault: StoryObj<typeof DisjointedBorder> = {
  render: () => (
    <DisjointedBorder style={{ padding: '0.5rem' }}>
      <p>hello world</p>
    </DisjointedBorder>
  ),
};
