import React, { useState } from 'react';

import './email.form.css';

import { UserContext } from '../../context/user-context';

export const EmailForm = () => {
  const { state, dispatch } = React.useContext(UserContext);

  const [email, setEmailAddress] = useState({
    address: state.emailAddress,
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: 'email',
      emailAddress: email.address,
    });
  }

  function updateEmailAddress(e) {
    e.preventDefault();
    const newEmail = {
      address: e.target.value,
    };
    setEmailAddress(newEmail);
  }

  return (
    <form class="App-form email-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="emailAddress">EmailAddress:</label>
        <input
          type="email"
          id="emailAddress"
          value={email.address}
          onChange={updateEmailAddress}
        ></input>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};
