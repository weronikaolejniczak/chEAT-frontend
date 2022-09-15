import { useTranslation } from 'react-i18next';

import { Page } from 'components/layouts/Page';
import { usePageTitle } from 'hooks/usePageTitle';

export const Dashboard = () => {
  const { t } = useTranslation();

  usePageTitle(t('dashboard'));

  return <Page>Dashboard</Page>;
};
