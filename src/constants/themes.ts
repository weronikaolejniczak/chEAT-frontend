export enum ThemesEnum {
  dark = 'dark',
  light = 'light',
}

type ColorsType = { [key: string]: string };

const palette = {
  babyPowder: '#fdfffc',
  blueMunsell: '#0091ad',
  rosePink: '#ff57bb',
  purpureus: '#9d44b5',
  raisinBlack: '#161925',
};

const baseTheme = {
  borderRadius: '8px',
  colors: {
    accent: palette.rosePink,
    primary: palette.blueMunsell,
    secondary: palette.purpureus,
  },
};

const Theme = (key: ThemesEnum, colors: ColorsType) => ({
  ...baseTheme,
  key,
  colors: { ...baseTheme.colors, ...colors },
});

export const darkTheme = Theme(ThemesEnum.dark, {
  background: palette.raisinBlack,
  text: palette.babyPowder,
});

export const lightTheme = Theme(ThemesEnum.light, {
  background: palette.babyPowder,
  text: palette.raisinBlack,
});
