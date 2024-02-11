import { Provider, View, defaultTheme } from '@adobe/react-spectrum';
import { useNavigate } from '@tanstack/react-router';

export type ColorScheme = 'light' | 'dark';

export type AppProps = {
  colorScheme: ColorScheme;
  children: React.ReactNode;
};

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
      <View minHeight={'100vh'}>{children}</View>
    </Provider>
  );
}
