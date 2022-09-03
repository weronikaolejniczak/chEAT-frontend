import { Routes, Route } from 'react-router-dom';

import { Benefits } from './pages/Benefits';
import { Goals } from './pages/Goals';
import { Home } from './pages/Home';
import { Redeem } from './pages/Redeem';
import { Theme } from './Theme';

export const App = () => {
  return (
    <Theme>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="benefits" element={<Benefits />} />
        <Route path="goals" element={<Goals />} />
        <Route path="redeem" element={<Redeem />} />
      </Routes>
    </Theme>
  );
};
