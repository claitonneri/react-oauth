import React, { useEffect, useState } from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

import SignOutButton from '../../components/SignOutButton';

const Profile: React.FC = () => {
  const [token, setToken] = useState('');
  const { user, getAccessTokenSilently, isLoading } = useAuth0();
  const { name, email, nickname, picture } = user!;

  useEffect(() => { 
    const getToken = async () => {
      setToken(await getAccessTokenSilently());
    }

    getToken();
  }, [getAccessTokenSilently]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <h1>Profile</h1>

      <span>Nome: </span> {name}
      <br />
      <span>E-mail: </span> {email}
      <br />
      <span>Usuário: </span> {nickname}
      <br />
      <br />
      <img src={picture || `https://ui-avatars.com/api/?&format=svg&background=EAEAEA&color=9A6517&rounded=true&name=${name}`} alt="User Avatar" style={{ width: 100, borderRadius: '50%' }} />
      <br />
      <br />
      <b>TOKEN: </b> <br /> <span style={{textAlign: 'center'}}>{token}</span>
      <br />
      <br />

      <SignOutButton />
    </>
  );
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <span>Loading...</span>,
});