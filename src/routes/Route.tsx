import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Loading from '../components/Loading';

interface IRouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user, isLoading } = useAuth0();


  if (isLoading) {
    return <Loading />;
  }

  return (
    <ReactDOMRoute
      render={({ location }) => {
        console.log(location)
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/profile',
              state: { from: location },
            }}
          />
        );
      }}
      {...rest}
    />
  );
};

export default Route;
