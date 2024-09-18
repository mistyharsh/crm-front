import {
  DEFAULT_THEME,
  createTheme,
  mergeMantineTheme,
  virtualColor,
  type CSSVariablesResolver,
} from '@mantine/core';

const override = createTheme({
  fontFamily: `'Plus Jakarta Sans', sans-serif`,
  primaryColor: 'violet',
  white: '#ffffff',
  colors: {
    gray: [
      '#fdfdfd',
      '#f8f8f8',
      '#e6e6e6',
      '#d5d5d5',
      '#b1b1b1',
      '#909090',
      '#6d6d6d',
      '#464646',
      '#222222',
      '#000000',
    ],
    dark: [
      '#ebebeb',
      '#d1d1d1',
      '#b2b2b2',
      '#909090',
      '#707070',
      '#545454',
      '#3f3f3f',
      '#323232',
      '#262626',
      '#1d1d1d',
    ],
    dark2: [
      '#1d1d1d',
      '#262626',
      '#323232',
      '#3f3f3f',
      '#545454',
      '#707070',
      '#909090',
      '#b2b2b2',
      '#d1d1d1',
      '#ebebeb',
    ],
    neutral: virtualColor({
      light: 'gray',
      dark: 'dark2',
      name: 'neutral',
    }),
  },
});

export const resolver: CSSVariablesResolver = ({ colors }) => ({
  variables: {
  },
  light: {
    '--mantine-color-body': '#fdfdfd',
  },
  dark: {
    '--mantine-color-body': '#101010',
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, override);
