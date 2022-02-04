import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
