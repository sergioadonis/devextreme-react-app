import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// import { Switch, Route, Redirect } from 'react-router-dom';
// import { SingleCard } from './layouts';
// import {
//   LoginForm,
//   ResetPasswordForm,
//   ChangePasswordForm,
//   CreateAccountForm
// } from './components';

export default function () {
  const { loginWithRedirect } = useAuth0();

  useEffect(loginWithRedirect);

  return (
    <div>
      <p>Redirecting to sign in flow...</p>
    </div>
  );
  // return (
  //   <Switch>
  //     <Route exact path='/login' >
  //       <SingleCard title="Sign In">
  //         <LoginForm />
  //       </SingleCard>
  //     </Route>
  //     <Route exact path='/create-account' >
  //       <SingleCard title="Sign Up">
  //         <CreateAccountForm />
  //       </SingleCard>
  //     </Route>
  //     <Route exact path='/reset-password' >
  //       <SingleCard
  //         title="Reset Password"
  //         description="Please enter the email address that you used to register, and we will send you a link to reset your password via Email."
  //       >
  //         <ResetPasswordForm />
  //       </SingleCard>
  //     </Route>
  //     <Route exact path='/change-password/:recoveryCode' >
  //       <SingleCard title="Change Password">
  //         <ChangePasswordForm />
  //       </SingleCard>
  //     </Route>
  //     <Redirect to={'/login'} />
  //   </Switch>
  // );
}
