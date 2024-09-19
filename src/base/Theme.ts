import {
  DEFAULT_THEME,
  createTheme,
  mergeMantineTheme,
  type CSSVariablesResolver,
} from '@mantine/core';

const override = createTheme({
  primaryColor: 'teal',
});

export const resolver: CSSVariablesResolver = (_theme) => ({
  variables: {},
  light: {},
  dark: {},
});

export const theme = mergeMantineTheme(DEFAULT_THEME, override);
