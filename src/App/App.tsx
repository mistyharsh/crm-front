import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { useNavigate } from '@tanstack/react-router';

import HeaderBar from '../Header/header';

export type AppProps = {
  children?: React.ReactNode;
};

export function App(props: AppProps) {
  const navigate = useNavigate();

  const myNavigate = (to: string) => {
    navigate({ to });
  };

  return (
    <Provider theme={defaultTheme} router={{ navigate: myNavigate }}>
      <HeaderBar />
      {props.children}
    </Provider>
  );
}
