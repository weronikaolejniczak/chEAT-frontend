import React, { Suspense, useEffect } from 'react';
import { StoryContext, StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

import i18n, { locales } from '../../src/i18n';

export const localeToggle = {
  name: 'Locale',
  description: 'Internationalization locale',
  toolbar: {
    icon: 'globe',
    items: locales,
    showName: false,
  },
};

i18n.on('languageChanged', (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});

// TODO: add loader
export const withI18n = (Story: StoryFn, context: StoryContext) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
