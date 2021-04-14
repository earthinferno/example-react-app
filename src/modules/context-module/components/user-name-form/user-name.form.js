import React, { useState } from 'react';

import './user-name.form.css';

import { UserContext } from '../../context/user-context';

export const UserNameForm = () => {
  const { state, dispatch } = React.useContext(UserContext);

  const [name, setName] = useState({
    firstName: state.firstName,
    lastName: state.lastName,
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: 'name',
      firstName: name.firstName,
      lastName: name.lastName,
    });
  }

  function updateFirstName(e) {
    e.preventDefault();
    const newName = {
      ...name,
      firstName: e.target.value,
    };
    setName(newName);
  }

  function updateLastName(e) {
    e.preventDefault();
    const newName = {
      ...name,
      lastName: e.target.value,
    };
    setName(newName);
  }

  return (
    <form className="App-form user-name-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">FirstName:</label>
        <input
          type="text"
          id="firstName"
          value={name.firstName}
          onChange={updateFirstName}
        ></input>
      </div>
      <div>
        <label htmlFor="lastname">LastName:</label>
        <input
          type="text"
          id="lastname"
          value={name.lastName}
          onChange={updateLastName}
        ></input>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};
