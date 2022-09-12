import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from 'firebase';
import { Nav } from '../Nav';
import { Content, Footer, Header, StyledMenu } from './styles';

export const Menu = () => {
  const { t } = useTranslation();
  const [user] = useAuthState(auth);

  return (
    <StyledMenu>
      <Header>Logo</Header>
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
