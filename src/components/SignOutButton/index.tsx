import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const SignOutButton: React.FC = () => {
  const { logout } = useAuth0();

  return <button onClick={() => logout()}>Logout</button>;
}

export default SignOutButton;