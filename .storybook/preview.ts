import type { Preview } from '@storybook/react';

import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
  tags: ['autodocs'],
};

export default preview;
