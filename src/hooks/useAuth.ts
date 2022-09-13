import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from 'firebase';

export const useAuth = () => {
  const data = useAuthState(auth);

  return data;
};
