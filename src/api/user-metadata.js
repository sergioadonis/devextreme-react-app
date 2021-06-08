import { useState, useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { useEnvironment } from '../contexts/environment';
import { useAccessToken } from '../contexts/access-token';

const useUserMetadata = ({userId}) => {
    const [userMetadata, setUserMetadata] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const { auth0Domain } = useEnvironment();
    const { accessToken, loading: accessTokenLoading } = useAccessToken();
    
    useEffect(() => {
       async function fetchData () {
           try {
               const userDetailsByIdUrl = `https://${auth0Domain}/api/v2/users/${userId}`;
               
               const metadataResponse = await fetch(userDetailsByIdUrl, {
                   headers: {
                       Authorization: 'Bearer ' + accessToken
                   }
               });
               
               const { user_metadata } = await metadataResponse.json();
               setUserMetadata(user_metadata);
           }
           catch (e) {
               setError(e);
           }
           
           setLoading(false);
       } 
       
       !accessTokenLoading && fetchData();
    }, [accessToken, userId, auth0Domain, accessTokenLoading]);
    
    return { userMetadata, loading, error };
}

export {
    useUserMetadata
}