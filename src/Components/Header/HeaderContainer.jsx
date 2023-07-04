import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Header from './Header.jsx';

const HeaderContainer = () => {
  const { isAuth } = useStoreState((state) => state.auth.authState);
  const signOut = useStoreActions((actions) => actions.auth.signOut);

  return <Header isAuth={isAuth} signOut={signOut} />;
};

export default HeaderContainer;
