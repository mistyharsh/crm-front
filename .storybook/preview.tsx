// Side effects imports should be at the top.
import '#base/Reset.css';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { MINIMAL_VIEWPORTS, } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import clsx from 'clsx';
import { type CSSProperties, type ReactNode } from 'react';

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
          { value: 'both', title: 'Side-by-side', right: '🪵' },
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

      if (colorScheme === 'both') {
        return (
          <div style={{ display: 'flex', gap: '4rem' }}>

            <MantineSurface
              scheme='light'
              storyElm={<Story />}
            />

            <MantineSurface
              scheme='dark'
              storyElm={<Story />}
            />
          </div>
        );
      }

      return (
        <MantineSurface
          scheme={colorScheme}
          storyElm={<Story />}
        />
      );
    },
    // function withAdobe(Story, context) {
    //   const colorScheme = context.globals.colorScheme || 'dark';

    //   if (colorScheme === 'both') {
    //     return (
    //       <div style={{ display: 'flex', gap: '4rem' }}>
    //         {wrapProvider('light', <Story />)}
    //         {wrapProvider('dark', <Story />)}
    //       </div>
    //     );
    //   }

    //   return wrapProvider(colorScheme, <Story />);
    // },
  ],
};

// function wrapProvider(scheme: ColorScheme, children: ReactNode) {
//   return (
//     <Provider
//       data-cl={'Provider'}
//       scale='medium'
//       theme={defaultTheme}
//       colorScheme={scheme}
//     >
//       {children}
//     </Provider>
//   );
// }

export type MantineSurfaceProps = {
  className?: string;
  storyElm: ReactNode;
  scheme?: 'light' | 'dark';
};

function MantineSurface(props: MantineSurfaceProps) {
  const { scheme, className, storyElm } = props;

  const id = useId();
  const selector = `#${id}`;

  const style = {
    backgroundColor: 'var(--mantine-color-body)',
    color: 'var(--mantine-color-text)',
  } as CSSProperties;

  return (
    <div className={clsx(className)} id={id} style={style}>
      <MantineProvider
        theme={theme}
        forceColorScheme={scheme}
        cssVariablesSelector={selector}
        getRootElement={() => document.querySelector(selector)! as HTMLElement}
      >
        {storyElm}
      </MantineProvider>
    </div>
  );
}

export default preview;
