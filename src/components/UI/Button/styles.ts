import styled from 'styled-components';

import { IButtonProps } from './Button';

export const StyledButton = styled.button<IButtonProps>`
  align-items: center;
  background-color: ${({ outlined, theme, variant }) =>
    outlined ? 'transparent' : theme.colors[variant]};
  border: 2px solid ${({ theme, variant }) => theme.colors[variant]};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ outlined, theme, variant }) =>
    outlined ? theme.colors[variant] : 'white'};
  cursor: pointer;
  display: flex;
  gap: 0.6em;
  justify-content: center;
  padding: 0.8em 2em;
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;
