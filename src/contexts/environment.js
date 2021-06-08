import { createContext, useContext } from 'react';

const publicUrl = process.env.PUBLIC_URL || '';
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0Scope = process.env.REACT_APP_AUTH0_SCOPE;
const auth0Audience = process.env.REACT_APP_AUTH0_AUDIENCE;

const EnvironmentContext = createContext({
  publicUrl,
  auth0ClientId,
  auth0Domain,
  auth0Scope,
  auth0Audience
});
const useEnvironment = () => useContext(EnvironmentContext);

export { useEnvironment };
