import React, { useState, useEffect } from 'react';
import Sidebar from './Components/01.Sidebar/Sidebar';
import LoginRoutes from './Components/999.Login/LoginRoutes';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import useSidebarOverride from './Hooks/UseSidebarOverride';

//Hook, move in the hooks folder
const useAuthRedirect = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('LoggedIn');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
};

const App: React.FC = () => {
  const [LoggedIn, SetLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('LoggedIn') === 'true';
  });
  useAuthRedirect();

  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);


  useSidebarOverride({ setSidebarVisible });

  const SetLogin = () => {
    SetLoggedIn(true);
    localStorage.setItem('LoggedIn', 'true');
  };

  return (
    <div className="App">
      {LoggedIn ? (
        <>
          {sidebarVisible && <Sidebar />}
          <Routes>
            <Route path="/leaderboard" element={<div>Hello</div>} />
          </Routes>
        </>
      ) : (
        <LoginRoutes SetLogin={SetLogin} />
      )}
    </div>
  );
};

export default App;