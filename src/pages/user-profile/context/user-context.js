import React from 'react';

import { ContextReducer } from './context-reducer';

// export const userData = {
//   firstName: 'Bob',
//   lastName: ' Jones',
//   emailAddress: 'bob.jones@hotmail.com',
// };

export const UserContext = React.createContext(undefined);

export const UserProvider = (props) => {
  const [state, dispatch] = React.useReducer(ContextReducer, props.userData);
  const value = { state, dispatch };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
