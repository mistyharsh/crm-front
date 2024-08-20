import { Provider, defaultTheme } from '@adobe/react-spectrum';
import type { ColorScheme } from '@react-types/provider';
import type { Preview } from '@storybook/react';

// Side effects imports should be at the top.
import '#shared/Reset.css';
import type { ReactNode } from 'react';


const preview: Preview = {
  globalTypes: {
    colorScheme: {
      name: 'Color Scheme',
      description: 'Global color scheme for components',
      defaultValue: 'dark',
      toolbar: {
        items: [
          { value: 'light', title: 'Light', right: '🔆', icon: 'lightning' },
          { value: 'dark', title: 'Dark', right: '🔅', icon: 'lightningoff' },
          { value: 'both', title: 'Side-by-side', right: '䷖', icon: 'mirror' },
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

      if (colorScheme === 'both') {
        return (
          <div style={{ display: 'flex', gap: '4rem' }}>
            {wrapProvider('light', <Story />)}
            {wrapProvider('dark', <Story />)}
          </div>
        );
      }

      return wrapProvider(colorScheme, <Story />);
    },
  ],
};

function wrapProvider(scheme: ColorScheme, children: ReactNode) {
  return (
    <Provider
      data-cl={'Provider'}
      scale='medium'
      theme={defaultTheme}
      colorScheme={scheme}
    >
      {children}
    </Provider>
  );
}

export default preview;
