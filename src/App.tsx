import React, { useState, useEffect } from 'react';
import Sidebar from './Components/01.Sidebar/Sidebar';
import LoginRoutes from './Components/999.Login/LoginRoutes';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('LoggedIn'); // Replace with your auth logic

  useEffect(() => {
      if (!isAuthenticated) {
          navigate('/login');
      }
      
  }, []); 
};

function App() {
  const [LoggedIn, SetLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('LoggedIn') === 'true';
  });
  useAuthRedirect();

  const SetLogin = () => {
    SetLoggedIn(true);
    localStorage.setItem('LoggedIn', 'true');
  };

  return (
    <div className="App">
      
      {LoggedIn ? (
        <Sidebar />
      ) : (
        <LoginRoutes SetLogin={SetLogin}></LoginRoutes>
      )}
    </div>
  );
}

export default App;
