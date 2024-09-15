import { DEFAULT_THEME, createTheme, mergeMantineTheme } from '@mantine/core';

const overrides = createTheme({
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  primaryColor: 'violet',
  white: '#ffffff',
});

export const theme = mergeMantineTheme(DEFAULT_THEME, overrides);
