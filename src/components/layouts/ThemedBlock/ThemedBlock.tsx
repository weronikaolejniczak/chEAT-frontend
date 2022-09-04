import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'components/UI/GlobalStyles';
import { Wrapper } from './styles';

type ThemedBlockPropsType = {
  children: ReactNode;
  fill?: boolean;
  theme: DefaultTheme;
};

/**
 * Storybook component - used as the story wrapper
 */
export const ThemedBlock = ({
  children,
  fill,
  theme,
}: ThemedBlockPropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper fill={fill}>{children}</Wrapper>
    </ThemeProvider>
  );
};
