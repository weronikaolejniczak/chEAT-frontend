import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { Page } from 'components/layouts/Page';
import { LoginForm } from 'components/domains/LoginForm';

// TODO: add skeleton loader
export const Login = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuth();

  useEffect(() => {
    if (user && !loading) navigate('/dashboard');
  }, [user, loading, navigate]);

  return (
    <Page center showMenu={false}>
      {loading ? <div>Loading</div> : <LoginForm />}
    </Page>
  );
};
