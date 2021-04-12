import React from 'react'

import { UserContext } from '../../context/user-context'

function DisplayUserData() {
  const { firstName, lastName, emailAddress } = React.useContext(UserContext)
  return (
    <React.Fragment>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{emailAddress}</div>
    </React.Fragment>
  )
}

export { DisplayUserData }
