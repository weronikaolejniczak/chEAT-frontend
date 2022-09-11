import styled, { css, DefaultTheme } from 'styled-components';

type WrapperPropsType = {
  half?: boolean;
  theme: DefaultTheme;
};

export const Wrapper = styled.div<WrapperPropsType>(
  ({ half, theme }) =>
    css`
      align-items: center;
      background: ${theme.colors.background};
      color: ${theme.colors.text};
      display: flex;
      justify-content: center;
      padding: 2rem;
      height: 100%;
      width: ${half ? 50 : 100}%;
    `
);
