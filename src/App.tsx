import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Benefits } from 'pages/Benefits';
import { Dashboard } from 'pages/Dashboard';
import { Goals } from 'pages/Goals';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Redeem } from 'pages/Redeem';
import { Theme } from 'components/providers/Theme';
import { ProtectedRoute } from 'components/layouts/ProtectedRoute';

export const App = () => {
  return (
    <Theme>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="benefits" element={<Benefits />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="goals" element={<Goals />} />
          <Route path="redeem" element={<Redeem />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Theme>
  );
};
