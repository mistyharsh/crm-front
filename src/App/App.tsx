import { defaultTheme, Provider } from '@adobe/react-spectrum';

export type AppProps = {
  children?: React.ReactNode;
};

export function App(props: AppProps) {
  return (
    <Provider theme={defaultTheme}>
      {props.children}
    </Provider>
  );
}
