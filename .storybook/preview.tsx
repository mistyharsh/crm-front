// Side effects imports should be at the top.
import '#base/Base.css';

import { MantineProvider } from '@mantine/core';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import { type ReactNode } from 'react';

import { theme } from '#base/Theme.js';

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
        ],
      },
    },
  },
  parameters: {
    backgrounds: { disable: true },
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
    function withMantine(Story, context) {
      const colorScheme = context.globals.colorScheme || 'dark';

      return <MantineSurface scheme={colorScheme} storyElm={<Story />} />;
    },
  ],
};

export type MantineSurfaceProps = {
  className?: string;
  storyElm: ReactNode;
  scheme?: 'light' | 'dark';
};

function MantineSurface(props: MantineSurfaceProps) {
  const { scheme, storyElm } = props;

  return (
    <MantineProvider
      theme={theme}
      forceColorScheme={scheme}
      withCssVariables={false}
    >
      {storyElm}
    </MantineProvider>
  );
}

export default preview;
