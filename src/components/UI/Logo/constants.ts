export const LOGO_PATH = '/assets/logo.png';
export const REDIRECT_PATH = '/dashboard';

export enum ELogoSize {
  small = 'small',
  medium = 'medium',
  big = 'big',
}

enum ETitleSize {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
}

export const titleEl = {
  [ELogoSize.small]: ETitleSize.h3,
  [ELogoSize.medium]: ETitleSize.h2,
  [ELogoSize.big]: ETitleSize.h1,
};

export const imageMultiplier = {
  [ELogoSize.small]: 0.5,
  [ELogoSize.medium]: 1,
  [ELogoSize.big]: 1.5,
};
