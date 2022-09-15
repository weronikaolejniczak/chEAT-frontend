import React from 'react';
import { DecoratorFn } from '@storybook/react';

import { darkTheme, lightTheme } from '../../src/constants/themes';
import { ThemedBlock } from '../../src/components/layouts/ThemedBlock';
import { Preview } from '../../src/components/layouts/Preview';

export const withTheme: DecoratorFn = (Story, context) => {
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
