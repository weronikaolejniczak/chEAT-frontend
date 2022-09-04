import styled, { css } from 'styled-components';

type ThemedBlockPropsType = {
  center?: boolean;
  fill?: boolean;
  left?: boolean;
};

/**
 * Storybook component - used in theme switcher functionality
 */
export const ThemedBlock = styled.div<ThemedBlockPropsType>(
  ({ center, fill, left, theme }) =>
    css`
      align-items: ${center && 'center'};
      background: ${theme.colors.background};
      border-right: ${left ? `1px solid ${theme.colors.text}` : 'none'};
      bottom: 0;
      display: ${center && 'flex'};
      height: 100vh;
      justify-content: ${center && 'center'};
      left: ${left || fill ? 0 : '50vw'};
      overflow: auto;
      padding: 1rem;
      position: absolute;
      right: ${left ? '50vw' : 0};
      top: 0;
      width: ${fill ? '100vw' : '50vw'};
    `
);
