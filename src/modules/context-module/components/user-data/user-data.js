import React from 'react';

import { UserContext } from '../../context/user-context';

function DisplayUserData() {
  const { state } = React.useContext(UserContext);
  return (
    <React.Fragment>
      <div>{state.firstName}</div>
      <div>{state.lastName}</div>
      <div>{state.emailAddress}</div>
    </React.Fragment>
  );
}

export { DisplayUserData };
