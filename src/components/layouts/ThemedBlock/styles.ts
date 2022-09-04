import styled, { css, DefaultTheme } from 'styled-components';

type WrapperPropsType = {
  fill?: boolean;
  theme: DefaultTheme;
};

export const Wrapper = styled.div<WrapperPropsType>(
  ({ fill, theme }) =>
    css`
      align-items: center;
      background: ${theme.colors.background};
      color: ${theme.colors.text};
      display: flex;
      justify-content: center;
      padding: 2rem;
      height: 100%;
      width: ${fill ? 100 : 50}%;
    `
);
