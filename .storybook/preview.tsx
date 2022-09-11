import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import '../src/font-awesome';
import { darkTheme, lightTheme } from '../src/constants/themes';
import { ThemedBlock } from '../src/components/layouts/ThemedBlock';
import { Preview } from '../src/components/layouts/Preview';

initialize({
  onUnhandledRequest: 'bypass',
});

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
          <ThemedBlock half theme={lightTheme}>
            <Story />
          </ThemedBlock>
          <ThemedBlock half theme={darkTheme}>
            <Story />
          </ThemedBlock>
        </Preview>
      );
    }
    default: {
      return (
        <ThemedBlock theme={storyTheme}>
          <Story />
        </ThemedBlock>
      );
    }
  }
};

const withRouter: DecoratorFn = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};

export const decorators = [withRouter, withTheme, mswDecorator];

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
