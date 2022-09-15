import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

type ProtectedRoutePropsType = {
  redirectPath?: string;
};

export const ProtectedRoute = ({
  redirectPath = '/login',
}: ProtectedRoutePropsType) => {
  const [user, isLoading] = useAuth();

  if (!user && !isLoading) return <Navigate to={redirectPath} replace />;

  return <Outlet />;
};
