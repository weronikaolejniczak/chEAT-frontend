import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../src/constants/themes';
import { GlobalStyles } from '../src/components/UI/GlobalStyles';
import { ThemedBlock } from '../src/components/layouts/ThemedBlock';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withTheme: DecoratorFn = (Story, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;

  switch (theme) {
    case 'side-by-side': {
      return (
        <>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <ThemedBlock center left>
              <Story />
            </ThemedBlock>
          </ThemeProvider>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <ThemedBlock center>
              <Story />
            </ThemedBlock>
          </ThemeProvider>
        </>
      );
    }
    default: {
      return (
        <ThemeProvider theme={storyTheme}>
          <GlobalStyles />
          <ThemedBlock center fill>
            <Story />
          </ThemedBlock>
        </ThemeProvider>
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
