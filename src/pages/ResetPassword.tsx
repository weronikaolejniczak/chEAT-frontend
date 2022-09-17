import { useTranslation } from 'react-i18next';

import { usePageTitle } from 'hooks/usePageTitle';
import { Page } from 'components/layouts/Page';
import { ResetPasswordForm } from 'components/domains/resetPassword/ResetPasswordForm';

export const ResetPassword = () => {
  const { t } = useTranslation();

  usePageTitle(t('reset-password'));

  return (
    <Page center showMenu={false}>
      <ResetPasswordForm />
    </Page>
  );
};
