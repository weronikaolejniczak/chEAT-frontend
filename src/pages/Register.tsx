import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { usePageTitle } from 'hooks/usePageTitle';
import { Page } from 'components/layouts/Page';
import { RegisterForm } from 'components/domains/register/RegisterForm';

// TODO: add skeleton loader
export const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [user, isLoading] = useAuth();

  usePageTitle(t('register'));

  useEffect(() => {
    if (user && !isLoading) navigate('/dashboard');
  }, [user, isLoading, navigate]);

  return (
    <Page center showMenu={false}>
      {isLoading ? <div>Loading</div> : <RegisterForm />}
    </Page>
  );
};
