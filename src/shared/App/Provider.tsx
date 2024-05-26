import { createContext } from 'react';

export type ColorScheme = 'light' | 'dark';

export type AppContext = {
  setScheme: (scheme: ColorScheme) => void;
};

export const AppContext = createContext<AppContext>({
  setScheme: () => {},
});
