import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'components/UI/GlobalStyles';
import { Wrapper } from './styles';

type ThemedBlockPropsType = {
  children: ReactNode;
  half?: boolean;
  theme: DefaultTheme;
};

/**
 * Storybook component - used as the story wrapper
 */
export const ThemedBlock = ({
  children,
  half,
  theme,
}: ThemedBlockPropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper half={half}>{children}</Wrapper>
    </ThemeProvider>
  );
};
