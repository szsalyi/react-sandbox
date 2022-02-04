export interface Colors {
  primary: string;
  primaryVar: string;
  secondary: string;
  error: string;
}

export interface TextColors {
  primary: string;
  secondary: string;
  tertiary: string;
  titleColor: string;
}

export interface CardColors {
  primary: string;
  secondary: string;
  primaryLight: string;
  hover: string;
}

export interface ButtonHoverColors {
  borderColor: string;
  backgroundColor: string;
  labelColor: string;
}
export interface ButtonColors {
  borderColor: string;
  backgroundColor: string;
  labelColor: string;
  disabled: string;
  hover: ButtonHoverColors;
}

export interface InputColors {
  backgroundColor: string;
}

export interface Theme extends Colors {
  pageBackground: string;
  loader: string;
  cardBackground: CardColors;
  white: string;
  textColors: TextColors;
  buttonColors: ButtonColors;
  input: InputColors;
}

const breakPoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const screenSize = {
  mobileS: `(min-width: ${breakPoints.mobileS})`,
  mobileM: `(min-width: ${breakPoints.mobileM})`,
  mobileL: `(min-width: ${breakPoints.mobileL})`,
  tablet: `(min-width: ${breakPoints.tablet})`,
  laptop: `(min-width: ${breakPoints.laptop})`,
  laptopL: `(min-width: ${breakPoints.laptopL})`,
  desktop: `(min-width: ${breakPoints.desktop})`,
  desktopL: `(min-width: ${breakPoints.desktop})`,
};

const colors: Colors = {
  primary: '#BB86FC',
  primaryVar: '#3700B3',
  secondary: '#AAD8D3',
  error: '#CF6679',
};

const lightTheme: Theme = {
  ...colors,
  pageBackground: '#fff',
  loader: '#3700B3',
  cardBackground: {
    primary: '#AAD8D3',
    secondary: '#F4F4F4',
    primaryLight: '#fff',
    hover: '#fff',
  },
  white: '#fff',
  buttonColors: {
    borderColor: '#AAD8D3',
    backgroundColor: '#AAD8D3',
    labelColor: '#fff',
    disabled: '#f5f5f5',
    hover: {
      borderColor: '#c19cf0',
      backgroundColor: '#c19cf0',
      labelColor: '#fff',
    },
  },
  input: {
    backgroundColor: '#EFECEC',
  },
  textColors: {
    primary: '#fff',
    secondary: '#12212',
    tertiary: '#bebebe',
    titleColor: '#1b1b1b',
  },
};

const darkTheme: Theme = {
  ...colors,
  pageBackground: '#1b1b1b',
  loader: '#03DAC6',
  cardBackground: {
    primary: '#03DAC6',
    secondary: '#242424',
    primaryLight: '#242424',
    hover: '#fff',
  },
  white: '#fff',
  buttonColors: {
    borderColor: '#03DAC6',
    backgroundColor: '#03DAC6',
    labelColor: '#1b1b1b',
    disabled: '#f5f5f5',
    hover: {
      borderColor: '#fff',
      backgroundColor: '#fff',
      labelColor: '#1b1b1b',
    },
  },
  input: {
    backgroundColor: '#ccc',
  },
  textColors: {
    primary: '#fff',
    secondary: '#fff',
    tertiary: '#3700B3',
    titleColor: '#fff',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
