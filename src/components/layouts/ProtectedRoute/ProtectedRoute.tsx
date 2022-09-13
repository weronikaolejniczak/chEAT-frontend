import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

type ProtectedRoutePropsType = {
  redirectPath?: string;
};

export const ProtectedRoute = ({
  redirectPath = '/login',
}: ProtectedRoutePropsType) => {
  const [user] = useAuth();

  if (!user) return <Navigate to={redirectPath} replace />;

  return <Outlet />;
};
