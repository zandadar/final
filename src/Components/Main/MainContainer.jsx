import React from 'react';
import { Redirect } from 'react-router';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Main from './Main.jsx';

const MainContainer = () => {
  const { isAuth } = useStoreState((state) => state.auth.authState);

  if (isAuth) {
    return <Redirect to="/menu" />;
  }

  return <Main />;
};

export default MainContainer;
