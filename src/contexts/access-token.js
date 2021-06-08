import { createContext, useContext, useState, useEffect } from 'react';
// import { useAccessToken as useAccessTokenApi } from '../api/access-token';
import { useAuth0 } from '@auth0/auth0-react';

const AccessTokenContext = createContext({ accessToken: null, loading: true });

const AccessTokenProvider = (props) => {
  const [accessTokenLoading, setaccessTokenLoading] = useState(true);
  // const { accessToken, loading } = useAccessTokenApi({ scope });
  const [accessToken, setAccessToken] = useState();
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function fetchAccessToken() {
      const result = await getAccessTokenSilently();
      setAccessToken(result);
      setaccessTokenLoading(false);
    }

    fetchAccessToken();
  }, [getAccessTokenSilently]);

  return (
    <AccessTokenContext.Provider
      value={{ accessToken, accessTokenLoading }}
      {...props}
    />
  );
};

const useAccessToken = () => useContext(AccessTokenContext);

export { AccessTokenProvider, useAccessToken };
