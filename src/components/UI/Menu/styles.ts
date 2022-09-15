import styled from 'styled-components';

export const StyledMenu = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 22rem;
  padding: 2rem;
`;

export const Header = styled.div``;

export const Content = styled.div`
  flex: 1;
`;

export const Footer = styled.div`
  font-size: 1.4rem;
`;

export const Action = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
`;
