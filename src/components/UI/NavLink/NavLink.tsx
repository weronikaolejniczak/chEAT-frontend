import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

import { Icon } from '../Icon';
import { StyledNavLink } from './styles';

type NavLinkPropsType = {
  children: ReactNode;
  icon: string;
};

export const NavLink = ({
  children,
  icon,
  ...props
}: NavLinkPropsType & LinkProps) => {
  return (
    <StyledNavLink {...props}>
      <Icon name={icon} />
      {children}
    </StyledNavLink>
  );
};
