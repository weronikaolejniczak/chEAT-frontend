import { useTranslation } from 'react-i18next';

import { Page } from 'components/layouts/Page';
import { usePageTitle } from 'hooks/usePageTitle';

export const Benefits = () => {
  const { t } = useTranslation();

  usePageTitle(t('benefits'));

  return <Page>Benefits</Page>;
};
