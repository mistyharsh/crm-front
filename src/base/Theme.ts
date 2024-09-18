import {
  DEFAULT_THEME,
  createTheme,
  mergeMantineTheme,
  virtualColor,
  type CSSVariablesResolver,
  type MantineColorsTuple,
  type MantineTheme,
} from '@mantine/core';

function rgba(hex: string, alpha: number) {
  // Remove the leading # if it's present
  const rrggbb = hex.replace(/^#/, '');

  // Parse the r, g, b values from the hex string
  let r = parseInt(rrggbb.substring(0, 2), 16);
  let g = parseInt(rrggbb.substring(2, 4), 16);
  let b = parseInt(rrggbb.substring(4, 6), 16);

  // Return the rgba string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const override = createTheme({
  fontFamily: `'Plus Jakarta Sans', sans-serif`,
  primaryColor: 'violet',
  white: '#ffffff',
  colors: {
    gray: [
      '#ffffff',
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
      '#ffffff',
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
      '#ffffff',
    ],
    neutral: virtualColor({
      light: 'gray',
      dark: 'dark2',
      name: 'neutral',
    }),
  },
});

function getNeutrals(theme: MantineTheme, color: MantineColorsTuple) {
  const { colors } = theme;
  const { neutral } = colors;

  return {
    '--mantine-color-text': neutral[9],
    '--mantine-color-body': neutral[1],
    '--mantine-color-placeholder': neutral[7],

    '--mantine-color-default': neutral[1],
    '--mantine-color-default-hover': neutral[2],
    '--mantine-color-default-color': 'var(--mantine-color-neutral-9)',

    '--mantine-color-dimmed': neutral[8],

    '--mantine-color-dark-text': neutral[9],
    '--mantine-color-dark-filled': neutral[8],
    '--mantine-color-dark-filled-hover': neutral[9],

    '--mantine-color-dark-light': rgba(color[8], 0.1),
    '--mantine-color-dark-light-hover': rgba(color[8], 0.12),
    '--mantine-color-dark-light-color': neutral[8],

    '--mantine-color-dark-outline': neutral[8],
    '--mantine-color-dark-outline-hover': rgba(color[8], 0.5),

    '--mantine-color-gray-text': neutral[8],
    '--mantine-color-gray-filled': neutral[8],
    '--mantine-color-gray-filled-hover': neutral[9],

    '--mantine-color-gray-light': rgba(color[8], 0.1),
    '--mantine-color-gray-light-hover': rgba(color[8], 0.12),
    '--mantine-color-gray-light-color': neutral[8],
    '--mantine-color-gray-outline': neutral[8],
    '--mantine-color-gray-outline-hover': rgba(color[8], 0.05),
  };
}

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
  },
  light: getNeutrals(theme, theme.colors.gray),
  dark: getNeutrals(theme, theme.colors.dark2),
});

export const theme = mergeMantineTheme(DEFAULT_THEME, override);
