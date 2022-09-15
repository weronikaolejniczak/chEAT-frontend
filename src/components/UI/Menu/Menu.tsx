import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { Nav } from '../Nav';
import { Logo } from '../Logo';
import { Content, Footer, Header, StyledMenu } from './styles';

export const Menu = () => {
  const { t } = useTranslation();
  const [user] = useAuth();

  return (
    <StyledMenu>
      <Header>
        <Logo size={Logo.size.small} />
      </Header>
      <Content>
        <Nav />
      </Content>
      <Footer>
        {user ? (
          <>
            {t('welcome-message', { user: 'Me' })} |{' '}
            <Link to="/logout">{t('logout')}</Link>
          </>
        ) : (
          <>
            <Link to="/login">{t('login')}</Link> |{' '}
            <Link to="/register">{t('register')}</Link>
          </>
        )}
      </Footer>
    </StyledMenu>
  );
};
