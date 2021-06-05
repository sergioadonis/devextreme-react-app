import { useEffect } from 'react';
// import { useAuth } from '../contexts/auth';
import { useAuth0 } from '@auth0/auth0-react';

const publicUrl = process.env.PUBLIC_URL || '';

const SignoutPage = () => {
  const { logout } = useAuth0();

  useEffect(() => logout({ returnTo: window.location.origin + publicUrl }));

  return (
    <div>
      <p>You clicked signout</p>
    </div>
  );
};

export { default as HomePage } from './home/home';
export { default as ProfilePage } from './profile/profile';
export { default as TasksPage } from './tasks/tasks';
export { SignoutPage };
