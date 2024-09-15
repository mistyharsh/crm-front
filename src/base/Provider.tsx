import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { createContext, useContext, type ReactNode } from 'react';

export type ColorScheme = 'light' | 'dark';

export type AppContextModel = {
  scheme: ColorScheme;
  setScheme: (scheme: ColorScheme) => void;
};

const AppContext = createContext<AppContextModel>({
  scheme: 'light',
  setScheme: () => {},
});

export type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider(props: AppProviderProps) {
  const scheme = useMantineColorScheme();
  const colorScheme = useComputedColorScheme();

  const value: AppContextModel = {
    scheme: colorScheme,
    setScheme: scheme.setColorScheme,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export function useAppProvider() {
  return useContext(AppContext);
}
