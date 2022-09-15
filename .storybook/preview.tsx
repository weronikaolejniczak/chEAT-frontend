import '../src/i18n';
import '../src/font-awesome';

import { withRouter } from './decorators/withRouter';
import { withTheme, themeToggle } from './decorators/withTheme';
import { withMocks } from './decorators/withMocks';

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

export const decorators = [withRouter, withTheme, withMocks];

export const globalTypes = {
  theme: themeToggle,
};
