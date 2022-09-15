import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { usePageTitle } from 'hooks/usePageTitle';
import { Page } from 'components/layouts/Page';
import { LoginForm } from 'components/domains/LoginForm';

// TODO: add skeleton loader
export const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [user, isLoading] = useAuth();

  usePageTitle(t('login'));

  useEffect(() => {
    if (user && !isLoading) navigate('/dashboard');
  }, [user, isLoading, navigate]);

  return (
    <Page center showMenu={false}>
      {isLoading ? <div>Loading</div> : <LoginForm />}
    </Page>
  );
};
