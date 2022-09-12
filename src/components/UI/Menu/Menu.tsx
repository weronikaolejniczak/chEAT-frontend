import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from 'firebase';
import { Nav } from '../Nav';
import { Content, Footer, Header, StyledMenu } from './styles';

export const Menu = () => {
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
            Welcome, user! | <Link to="/logout">Log out</Link>
          </>
        ) : (
          <>
            <Link to="/login">Log in</Link> |{' '}
            <Link to="/register">Register</Link>
          </>
        )}
      </Footer>
    </StyledMenu>
  );
};
