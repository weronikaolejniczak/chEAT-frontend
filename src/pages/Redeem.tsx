import { useTranslation } from 'react-i18next';

import { Page } from 'components/layouts/Page';
import { usePageTitle } from 'hooks/usePageTitle';

export const Redeem = () => {
  const { t } = useTranslation();

  usePageTitle(t('redeem'));

  return <Page>Redeem</Page>;
};
