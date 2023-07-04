import React from 'react';
import { Redirect } from 'react-router';
import { useStoreActions, useStoreState } from 'easy-peasy';
import UserCreateForm from './UserCreateForm.jsx';

const UserCreateContainer = () => {
  const isAuth = useStoreState((state) => state.auth.authState.isAuth);
  const signUp = useStoreActions((actions) => actions.auth.signUp);

  if (isAuth) {
    return <Redirect to="/" />;
  }

  const onSubmit = (formData) => {
    signUp(formData);
  };

  return <UserCreateForm onSubmit={onSubmit} buttonName="Зарегистрироваться" isRegistration />;
};

export default UserCreateContainer;
