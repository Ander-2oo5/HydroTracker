import React, { useState } from 'react';
import WaterTracker from './components/WaterTracker';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const handleLogin = (status: boolean, isAdmin: boolean) => {
    setIsAuthenticated(status);
    setIsAdmin(isAdmin);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        isAdmin ? (
          <Dashboard onLogout={handleLogout} />
        ) : (
          <WaterTracker onLogout={handleLogout} />
        )
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;