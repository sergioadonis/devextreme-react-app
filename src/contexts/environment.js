import { createContext, useContext } from 'react';

const publicUrl = process.env.PUBLIC_URL || '';
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;

const EnvironmentContext = createContext({ publicUrl, auth0ClientId, auth0Domain });
const useEnvironment = () => useContext(EnvironmentContext);

export {
    useEnvironment
}

