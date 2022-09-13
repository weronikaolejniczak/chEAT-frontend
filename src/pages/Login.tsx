import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from 'firebase';
import { Page } from 'components/layouts/Page';
import { LoginForm } from 'components/domains/LoginForm';

// TODO: add skeleton loader
export const Login = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);

  return (
    <Page center showMenu={false}>
      {loading ? <div>Loading</div> : <LoginForm />}
    </Page>
  );
};
