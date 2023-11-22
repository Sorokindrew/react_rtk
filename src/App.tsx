import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';
import { Favourite } from './pages/Favourite';


function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
