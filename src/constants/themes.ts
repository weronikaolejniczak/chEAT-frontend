const baseTheme = {
  borderRadius: '4px',
  colors: {
    primary: '#0C7DBB',
    secondary: '#B53EDA',
  },
};

export enum EThemes {
  dark = 'dark',
  light = 'light',
}

type ColorsType = {
  accent: string;
  background: string;
  error: string;
  placeholder: string;
  success: string;
  surface: string;
  text: string;
  warning: string;
};

export const Theme = (key: EThemes, colors: ColorsType) => ({
  ...baseTheme,
  key,
  colors: { ...baseTheme.colors, ...colors },
});

export type ThemeType = ReturnType<typeof Theme>;

export const darkTheme = Theme(EThemes.dark, {
  accent: '#FA1179',
  background: '#1A1818',
  error: '#FC3C10',
  placeholder: '#987979',
  success: '#44DB78',
  surface: '#242121',
  text: '#FCFAF8',
  warning: '#F28638',
});

export const lightTheme = Theme(EThemes.light, {
  accent: '#E50258',
  background: '#FCFAF8',
  error: '#E12607',
  placeholder: '#876E6D',
  success: '#44DB78',
  surface: '#F4EDE6',
  text: '#1A1818',
  warning: '#F28638',
});
