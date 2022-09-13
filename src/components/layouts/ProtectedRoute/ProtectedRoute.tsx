import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';

import { auth } from 'firebase';

type ProtectedRoutePropsType = {
  redirectPath?: string;
};

export const ProtectedRoute = ({
  redirectPath = '/login',
}: ProtectedRoutePropsType) => {
  const [user] = useAuthState(auth);

  if (!user) return <Navigate to={redirectPath} replace />;

  return <Outlet />;
};
