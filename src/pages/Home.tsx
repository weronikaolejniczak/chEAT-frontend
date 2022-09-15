import { useTranslation } from 'react-i18next';

import { Page } from 'components/layouts/Page';
import { usePageTitle } from 'hooks/usePageTitle';

export const Home = () => {
  const { t } = useTranslation();

  usePageTitle(t('home'));

  return <Page showMenu={false}>Home</Page>;
};
