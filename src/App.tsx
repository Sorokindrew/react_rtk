import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Favourite } from './pages/Favourite';
import { History } from './pages/History';
import { userContext } from './context/userContext';
import { Search } from './pages/Search';
import { MainPage } from './pages/MainPage';


function App() {
  const [user, setUser] = useState('');

  const ContextProvider = userContext.Provider;

  return (
    <ContextProvider value={{ value: user, onChange: setUser }}>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/history" element={<History />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
