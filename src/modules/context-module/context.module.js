import { UserProvider } from './context/user-context';
import { DisplayUserData } from './components/user-data/user-data';
import { UserNameForm } from './components/user-name-form/user-name.form';
import { EmailForm } from './components/email-form/email.form';
import { useEffect, useState } from 'react';

function ContextModule(props) {
  const [userData, setUserData] = useState({});
  const [dataFetched, setFetched] = useState(false);
  useEffect(() => {
    (async function () {
      setUserData({
        firstName: 'Bob',
        lastName: ' Jones',
        emailAddress: 'bob.jones@hotmail.com',
      });
      setFetched(true);
    })();
  }, [props]);

  if (!dataFetched) {
    return <div>Fetching user data....</div>;
  }
  return (
    <UserProvider userData={userData}>
      <DisplayUserData></DisplayUserData>
      <UserNameForm></UserNameForm>
      <EmailForm />
    </UserProvider>
  );
}

export { ContextModule };
