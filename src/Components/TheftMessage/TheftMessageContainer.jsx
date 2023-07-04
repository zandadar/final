import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import TheftMessageForm from './TheftMessageForm.jsx';

const TheftMessageContainer = () => {
  const isAuth = useStoreState((state) => state.auth.authState.isAuth);
  const officers = useStoreState((state) => state.officers.officersState.officers);
  const addNewMessage = useStoreActions((action) => action.theftMessage.addNewMessage);
  const addNewUnauthorizedMessage = useStoreActions(
    (action) => action.theftMessage.addNewUnauthorizedMessage
  );
  const getOfficersList = useStoreActions((action) => action.officers.getOfficersList);

  useEffect(() => {
    console.log(isAuth);
    isAuth ? getOfficersList() : '';
  }, []);

  const onNewMessageSubmit = (formData) => {
    isAuth ? addNewMessage(formData) : addNewUnauthorizedMessage(formData);
  };

  return <TheftMessageForm isAuth={isAuth} onSubmit={onNewMessageSubmit} officers={officers} />;
};

export default TheftMessageContainer;
