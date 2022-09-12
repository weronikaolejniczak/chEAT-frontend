import { useTranslation } from 'react-i18next';

import { NavLink } from '../NavLink';
import { StyledNav } from './styles';

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <StyledNav>
      <NavLink icon="home" to="/">
        {t('home')}
      </NavLink>
      <NavLink icon="gem" to="/benefits">
        {t('benefits')}
      </NavLink>
      <NavLink icon="bullseye" to="/goals">
        {t('goals')}
      </NavLink>
      <NavLink icon="shop" to="/reedem">
        {t('redeem')}
      </NavLink>
    </StyledNav>
  );
};
