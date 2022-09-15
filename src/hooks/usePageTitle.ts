import { useEffect } from 'react';

import { APP_NAME } from 'constants/app';

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    title
      ? (document.title = `${APP_NAME} | ${title}`)
      : (document.title = APP_NAME);
  }, [title]);
};
