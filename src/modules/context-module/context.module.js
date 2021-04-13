import { UserProvider } from './context/user-context';
import { DisplayUserData } from './components/user-data/user-data';

function ContextModule() {
  return (
    // <UserContext.Provider value={userData}>
    <UserProvider>
      <DisplayUserData></DisplayUserData>
    </UserProvider>
    // </UserContext.Provider>
  );
}

export { ContextModule };
