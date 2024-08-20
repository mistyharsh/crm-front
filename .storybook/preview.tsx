import { Provider, defaultTheme } from '@adobe/react-spectrum';
import type { Preview } from '@storybook/react';

// Side effects imports should be at the top.
import '#shared/Reset.css';

const preview: Preview = {
  globalTypes: {
    colorScheme: {
      name: 'Color Scheme',
      description: 'Global color scheme for components',
      defaultValue: 'dark',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', right: '🔆', icon: 'circle' },
          { value: 'dark', title: 'Dark', right: '🔅', icon: 'circlehollow' },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    function withAdobe(Story, context) {
      const colorScheme = context.globals.colorScheme || 'dark';

      return (
        <Provider
          scale='medium'
          minHeight={'100dvh'}
          theme={defaultTheme}
          colorScheme={colorScheme}
        >
          <Story />
        </Provider>
      );
    },
  ],
};

export default preview;
