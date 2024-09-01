// Side effects imports should be at the top.
import '#base/Reset.css';

import { Provider, defaultTheme } from '@adobe/react-spectrum';
import type { ColorScheme } from '@react-types/provider';
import { MINIMAL_VIEWPORTS, } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import type { ReactNode } from 'react';

const preview: Preview = {
  globalTypes: {
    colorScheme: {
      title: 'Color Scheme',
      description: 'Global color scheme for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Color Scheme',
        icon: 'contrast',

        items: [
          { value: 'light', title: 'Light', right: '🔆' },
          { value: 'dark', title: 'Dark', right: '🔅' },
          { value: 'both', title: 'Side-by-side', right: '🪵' },
        ],
      },
    },
  },
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
      },
      defaultOrientation: 'portrait',
      // defaultViewport: 'responsive',
    },
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
