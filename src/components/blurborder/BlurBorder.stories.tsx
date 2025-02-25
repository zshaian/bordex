import { Meta, StoryObj } from '@storybook/react/*';

import BlurBorder from './BlurBorder';

const meta: Meta<typeof BlurBorder> = {
  component: BlurBorder,
};

export default meta;

export const SmallBlurBorder: StoryObj<typeof BlurBorder> = {
  render: () => (
    <BlurBorder borderBlur="10px" borderWidth="10px" borderColor="orange">
      <p>hello world</p>
    </BlurBorder>
  ),
};
