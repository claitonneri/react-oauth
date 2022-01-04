import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import logoIcon from '../../assets/logo-icon.png'

import { Button, Divider } from './styles'

const SignOutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({
      returnTo: process.env.REACT_APP_RETURN_TO_LOGOUT
    })}>
      <img src={logoIcon} alt='Logo Icon' />
      <Divider />
      Logout
    </Button>
  );
}

export default SignOutButton;