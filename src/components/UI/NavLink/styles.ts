import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { EThemes } from 'constants/themes';

export const StyledNavLink = styled(NavLink)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  gap: 1.2rem;
  padding: 1.2rem;

  svg {
    height: 16px;
    width: 16px;
  }

  &:hover {
    filter: brightness(
      ${({ theme }) => (theme.key === EThemes.dark ? 120 : 97)}%
    );
  }
`;
