import { Routes, Route } from 'react-router-dom';

import { Benefits } from './pages/Benefits';
import { Goals } from './pages/Goals';
import { Home } from './pages/Home';
import { Redeem } from './pages/Redeem';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="benefits" element={<Benefits />} />
      <Route path="goals" element={<Goals />} />
      <Route path="redeem" element={<Redeem />} />
    </Routes>
  );
};
