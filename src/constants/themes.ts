const palette = {
  babyPowder: '#fdfffc',
  blueMunsell: '#0091ad',
  flame: '#eb5e28',
  darkGrey: '#666666',
  lightGrey: '#aaaaaa',
  purpureus: '#9d44b5',
  raisinBlack: '#161925',
  rosePink: '#ff57bb',
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
  text: palette.babyPowder,
});

export const lightTheme = Theme(EThemes.light, {
  background: palette.babyPowder,
  placeholder: palette.darkGrey,
  text: palette.raisinBlack,
});
