import React from 'react';
import { DecoratorFn } from '@storybook/react';

import '../src/font-awesome';
import { darkTheme, lightTheme } from '../src/constants/themes';
import { ThemedBlock } from '../src/components/layouts/ThemedBlock';
import { Preview } from '../src/components/layouts/Preview';

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

const withTheme: DecoratorFn = (Story, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;

  switch (theme) {
    case 'side-by-side': {
      return (
        <Preview>
          <ThemedBlock theme={lightTheme}>
            <Story />
          </ThemedBlock>
          <ThemedBlock theme={darkTheme}>
            <Story />
          </ThemedBlock>
        </Preview>
      );
    }
    default: {
      return (
        <ThemedBlock fill theme={storyTheme}>
          <Story />
        </ThemedBlock>
      );
    }
  }
};

export const decorators = [withTheme];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
    },
  },
};
