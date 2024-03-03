import { Provider, View, defaultTheme } from '@adobe/react-spectrum';
import { createRootRoute, useNavigate } from '@tanstack/react-router';
import type { ReactNode } from 'react';

export type ColorScheme = 'light' | 'dark';

export type AppProps = {
  colorScheme: ColorScheme;
  children: ReactNode;
};

export const rootRoute = createRootRoute({});

export function App(props: AppProps) {
  const { children, colorScheme } = props;
  const navigateRoute = useNavigate();

  const navigate = (to: string) => {
    navigateRoute({ to });
  };

  return (
    <Provider
      data-cl='app'
      scale='medium'
      theme={defaultTheme}
      colorScheme={colorScheme}
      router={{ navigate }}
    >
      <View minHeight={'100vh'}>
        {children}
      </View>
    </Provider>
  );
}
