import React, { lazy, Suspense, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { Header } from './components/Header';
import { Favourite } from './pages/Favourite';
import { History } from './pages/History';
import { userContext } from './context/userContext';
import { MainPage } from './pages/MainPage';
import { DishPage } from './pages/DishPage';
import { getFromLS } from './utils/localStoreData';


function App() {
  const [user, setUser] = useState(
    typeof getFromLS('activeUser') === 'object' ? '' : getFromLS('activeUser')
  );
  const value = useMemo(() => ({ user: user, onChange: setUser }), [user]);

  const ContextProvider = userContext.Provider;

  const Search = lazy(() => import('./pages/Search'));

  return (
    <ContextProvider value={value}>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Routes>
          <Route path="/"
            element={<ErrorBoundary fallback={<div>Something went wrong...</div>}><MainPage /></ErrorBoundary>} />
          <Route path="/dish/:id" element={<DishPage />} />
          <Route path="/search"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Search />
              </Suspense>} />
          <Route path="/history" element={<History />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </div >
    </ContextProvider >
  );
}

export default App;
