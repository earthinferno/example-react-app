function ContextReducer(state, action) {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
      }
    case 'email':
      return {
        ...state,
        emailAddress: action.emailAddress,
      }
    default:
      throw new Error()
  }
}

export { ContextReducer }
