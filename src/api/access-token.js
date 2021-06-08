import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import { useEnvironment } from '../contexts/environment'

// const AccessTokenContext = createContext();

function useAccessToken({ scope }) {
    const [accessToken, setAccessToken] = useState();
    const [loading, setLoading] = useState(true);
    // const [scope, setScope] = useState();
    const { getAccessTokenSilently } = useAuth0();
    const { auth0Domain } = useEnvironment();
    
    useEffect(() => {
        async function fetchAccessToken() {
            const audience = `https://${auth0Domain}/api/v2/`;
            const result = await getAccessTokenSilently({ audience, scope});
            setAccessToken(result);
            setLoading(false);
        }
        
        fetchAccessToken();
    }, [auth0Domain, getAccessTokenSilently, scope]);
    
    return { accessToken, loading };
}

// const useAccessToken = () => useContext(AccessTokenContext);

export { useAccessToken }