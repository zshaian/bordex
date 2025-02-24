import type { Meta, StoryObj } from '@storybook/react/*';
import SmartRating from './SmartRating';

const meta: Meta<typeof SmartRating> = {
  component: SmartRating,
};

export default meta;

type Story = StoryObj<typeof SmartRating>;

export const RatingTest: Story = {
  render: () => (
    <SmartRating title="default theme" theme="primary" testIdPrefix="rating" />
  ),
};

export const RatingTestSecondary = {
  render: () => (
    <SmartRating
      title="secondary theme"
      theme="secondary"
      testIdPrefix="raing"
    />
  ),
};
