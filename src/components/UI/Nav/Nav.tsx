import { NavLink } from '../NavLink';
import { StyledNav } from './styles';

export const Nav = () => {
  return (
    <StyledNav>
      <NavLink icon="home" to="/">
        Home
      </NavLink>
      <NavLink icon="gem" to="/benefits">
        Benefits
      </NavLink>
      <NavLink icon="bullseye" to="/goals">
        Goals
      </NavLink>
      <NavLink icon="shop" to="/">
        Redeem
      </NavLink>
    </StyledNav>
  );
};
