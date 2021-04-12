import { UserContext, userData } from './context/user-context'
import { DisplayUserData } from './components/user-data/user-data'

function ContextModule() {
  return (
    <UserContext.Provider value={userData}>
      <DisplayUserData></DisplayUserData>
    </UserContext.Provider>
  )
}

export { ContextModule }
