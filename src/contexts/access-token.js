import { createContext, useContext } from 'react';
import { useAccessToken as useAccessTokenApi } from '../api/access-token';

const AccessTokenContext = createContext({accessToken: null, loading: true});

const AccessTokenProvider = ({scope, ...props}) => {
    const { accessToken, loading } = useAccessTokenApi({scope});
    
    return (
        <AccessTokenContext.Provider value={{ accessToken, loading }} {...props} />
    )
};

const useAccessToken = () => useContext(AccessTokenContext);

export {
    AccessTokenProvider,
    useAccessToken
};