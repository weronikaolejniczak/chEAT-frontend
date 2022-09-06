import { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from 'constants/themes';
import { GlobalStyles } from 'components/UI/GlobalStyles';

const prefersDarkColorScheme = window.matchMedia?.(
  '(prefers-color-scheme: dark)'
);

type ThemePropsType = {
  children: ReactNode;
};

export const Theme = ({ children }: ThemePropsType) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    prefersDarkColorScheme.matches
  );

  prefersDarkColorScheme.addEventListener('change', (event) => {
    setIsDarkTheme(event.matches);
  });

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
