import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes'

import theme from './styles/theme'

import GlobalStyles from './styles/global'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_DOMAIN!}
          clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
          redirectUri={window.location.origin}
        >
          <Routes />
          <GlobalStyles />
        </Auth0Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
