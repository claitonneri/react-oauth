import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import logoIcon from '../../assets/logo-icon.png';

import { Button, Divider } from './styles';

const SignInButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button onClick={() => loginWithRedirect()}>
      <img src={logoIcon} alt='Logo Icon' />
      <Divider />
      Entrar com Guararapes oAuth
    </Button>
  );
}

export default SignInButton;