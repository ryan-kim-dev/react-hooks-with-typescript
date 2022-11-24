import { useState } from 'react';

function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  );
}

export default LoggedIn;
