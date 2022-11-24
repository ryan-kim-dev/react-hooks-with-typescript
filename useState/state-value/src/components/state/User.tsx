import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

function User() {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: 'Ryan Kim',
      email: 'ryankim@email.com',
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>유저 이름: {user?.name}</div>
      <div>메일 주소: {user?.email}</div>
    </div>
  );
}

export default User;
