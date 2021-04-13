import { UserProvider } from './context/user-context';
import { DisplayUserData } from './components/user-data/user-data';
import { UserNameForm } from './components/user-name-form/user-name.form';
import { EmailForm } from './components/email-form/email.form';

function ContextModule() {
  return (
    <UserProvider>
      <DisplayUserData></DisplayUserData>
      <UserNameForm></UserNameForm>
      <EmailForm />
    </UserProvider>
  );
}

export { ContextModule };
