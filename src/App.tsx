import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

import Routes from './routes'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN!}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
        redirectUri={window.location.origin}
      >
        <Routes />
      </Auth0Provider>
    </BrowserRouter>
  )
}

export default App;
