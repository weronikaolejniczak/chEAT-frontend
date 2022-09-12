const palette = {
  black: '#13151f',
  blueMunsell: '#0280a6',
  cultured: '#f5f5f5',
  darkGrey: '#666666',
  flame: '#e22f02',
  lightGrey: '#aaaaaa',
  purpureus: '#9d44b5',
  raisinBlack: '#161925',
  rosePink: '#e30f7f',
  white: '#fcfcfc',
};

const baseTheme = {
  borderRadius: '4px',
  colors: {
    accent: palette.rosePink,
    error: palette.flame,
    primary: palette.blueMunsell,
    secondary: palette.purpureus,
  },
};

export enum EThemes {
  dark = 'dark',
  light = 'light',
}

type ColorsType = {
  background: string;
  placeholder: string;
  surface: string;
  text: string;
};

export const Theme = (key: EThemes, colors: ColorsType) => ({
  ...baseTheme,
  key,
  colors: { ...baseTheme.colors, ...colors },
});

export type ThemeType = ReturnType<typeof Theme>;

export const darkTheme = Theme(EThemes.dark, {
  background: palette.raisinBlack,
  placeholder: palette.lightGrey,
  surface: palette.black,
  text: palette.white,
});

export const lightTheme = Theme(EThemes.light, {
  background: palette.white,
  placeholder: palette.darkGrey,
  surface: palette.cultured,
  text: palette.raisinBlack,
});
