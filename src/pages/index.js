import { useEffect } from 'react'
import { useAuth } from '../contexts/auth';

const SignoutPage = () => {
    const { signOut } = useAuth();
    
    useEffect(signOut);
    
    return (
    <div>
      <p>You clicked signout</p>
    </div>
  );
}

export { default as HomePage } from './home/home';
export { default as ProfilePage } from './profile/profile';
export { default as TasksPage } from './tasks/tasks';
export { SignoutPage }
