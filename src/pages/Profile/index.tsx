import React, { useEffect, useState } from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

import SignOutButton from '../../components/SignOutButton';

import {
  Container,
  Header,
  ProfileContainer,
  ProfileContent,
  ProfileTitle,
  ProfileInfo,
  ProfileTokenContent,
  ProfileTokenTitle,
  ProfileTokenInfo
} from './styles'

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
    <Container>
      <Header>
        <img src={
            picture ||
            `https://ui-avatars.com/api/?&format=svg&background=EAEAEA&color=9A6517&rounded=true&name=${name}`}
            alt="User Avatar"
          />
      </Header>
      
      <ProfileContainer>
        {name && (
          <ProfileContent>
            <ProfileTitle>
              Name
            </ProfileTitle>

            <ProfileInfo>
              {name}
            </ProfileInfo>
          </ProfileContent>
        )}

        {email && (
          <ProfileContent>
            <ProfileTitle>
              E-mail
            </ProfileTitle>

            <ProfileInfo>
              {email}
            </ProfileInfo>
          </ProfileContent>
        )}

        {nickname && (
          <ProfileContent>
            <ProfileTitle>
              Usuário
            </ProfileTitle>

            <ProfileInfo>
              {nickname}
            </ProfileInfo>
          </ProfileContent>
        )}
          
        <ProfileTokenContent>
          <ProfileTokenTitle>
            TOKEN
          </ProfileTokenTitle>

          <ProfileTokenInfo>
            {token}
          </ProfileTokenInfo>
        </ProfileTokenContent>
      </ProfileContainer>

      <SignOutButton />
    </Container>
  );
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <span>Loading...</span>,
});