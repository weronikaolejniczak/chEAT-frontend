import { useTranslation } from 'react-i18next';

import { Page } from 'components/layouts/Page';
import { usePageTitle } from 'hooks/usePageTitle';

export const Goals = () => {
  const { t } = useTranslation();

  usePageTitle(t('goals'));

  return <Page>Goals</Page>;
};
