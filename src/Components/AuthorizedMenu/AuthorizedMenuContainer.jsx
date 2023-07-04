import React from 'react';
import { Redirect } from 'react-router';
import { useStoreState } from 'easy-peasy';
import AuthorizedMenu from './AuthorizedMenu.jsx';

const AuthorizedMenuContainer = () => {
  const { isAuth } = useStoreState((state) => state.auth.authState);

  if (!isAuth) return <Redirect to="/" />;

  return <AuthorizedMenu />;
};

export default AuthorizedMenuContainer;
