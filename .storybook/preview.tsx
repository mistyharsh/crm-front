import { Provider, defaultTheme } from '@adobe/react-spectrum';
import type { Preview } from '@storybook/react';

// Side effects imports should be at the top.
import '#shared/Reset.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    function withAdobe(Story) {
      return (
        <Provider
          scale='medium'
          minHeight={'100dvh'}
          theme={defaultTheme}
          colorScheme={'dark'}
        >
          <Story />
        </Provider>
      );
    },
  ],
};

export default preview;
