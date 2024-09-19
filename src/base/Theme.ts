import {
  DEFAULT_THEME,
  createTheme,
  mergeMantineTheme,
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

function getNeutrals(_theme: MantineTheme, color: MantineColorsTuple) {
  // TODO: This needs better documentation.
  return {
    '--mantine-color-text': color[8],
    '--mantine-color-body': color[1],
    '--mantine-color-placeholder': color[7],

    '--mantine-color-default': color[1],
    '--mantine-color-default-hover': color[2],
    '--mantine-color-default-color': color[9],

    '--mantine-color-dimmed': color[8],

    '--mantine-color-dark-text': color[9],
    '--mantine-color-dark-filled': color[8],
    '--mantine-color-dark-filled-hover': color[9],

    '--mantine-color-dark-light': rgba(color[8], 0.1),
    '--mantine-color-dark-light-hover': rgba(color[8], 0.12),
    '--mantine-color-dark-light-color': color[8],

    '--mantine-color-dark-outline': color[8],
    '--mantine-color-dark-outline-hover': rgba(color[8], 0.5),

    '--mantine-color-gray-text': color[8],
    '--mantine-color-gray-filled': color[8],
    '--mantine-color-gray-filled-hover': color[9],

    '--mantine-color-gray-light': rgba(color[8], 0.1),
    '--mantine-color-gray-light-hover': rgba(color[8], 0.12),
    '--mantine-color-gray-light-color': color[8],
    '--mantine-color-gray-outline': color[8],
    '--mantine-color-gray-outline-hover': rgba(color[8], 0.05),
  };
}

// Spetrum Light Gray
const gray: MantineColorsTuple = [
  // '#ffffff',
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
];

// Spectrum Dark Gray
const dark: MantineColorsTuple = [
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
];

const override = createTheme({
  fontFamily: `'Plus Jakarta Sans', sans-serif`,
  primaryColor: 'violet',
  white: '#ffffff',
  colors: {
    gray,
    dark: [...dark].reverse() as any,
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: getNeutrals(theme, gray),
  dark: getNeutrals(theme, dark),
});

export const theme = mergeMantineTheme(DEFAULT_THEME, override);
