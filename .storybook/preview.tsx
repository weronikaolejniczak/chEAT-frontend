import '../src/i18n';
import '../src/font-awesome';

import { withRouter } from './decorators/withRouter';
import { withTheme, themeToggle } from './decorators/withTheme';
import { withMocks } from './decorators/withMocks';
import { localeToggle, withI18n } from './decorators/withI18n';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

export const decorators = [withRouter, withTheme, withMocks, withI18n];

export const globalTypes = {
  theme: themeToggle,
  locale: localeToggle,
};
