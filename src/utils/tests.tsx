import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import { lightTheme } from 'constants/themes';

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
      </BrowserRouter>
    ),
    ...options,
  });

export * from '@testing-library/react';
export { default as user } from '@testing-library/user-event';
export { customRender as render };
