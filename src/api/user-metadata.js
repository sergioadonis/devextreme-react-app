import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useEnvironment } from '../contexts/environment';

function useUserMetadata ({userId}) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const { auth0Domain } = useEnvironment();
    const { getAccessTokenSilently } = useAuth0();
    
    useEffect(() => {
       async function fetchData () {
           try {
               const accessToken = await getAccessTokenSilently({
                   audience: `https://${auth0Domain}/api/v2/`,
                   scope: 'read:current_user'
               });
               
               const userDetailsByIdUrl = `https://${auth0Domain}/api/v2/users/${userId}`;
               
               const metadataResponse = await fetch(userDetailsByIdUrl, {
                   headers: {
                       Authorization: 'Bearer ' + accessToken
                   }
               });
               
               const { user_metadata } = await metadataResponse.json();
               setData(user_metadata);
           }
           catch (e) {
               setError(e);
           }
           
           setLoading(false);
       } 
       
       fetchData();
    }, [getAccessTokenSilently, userId, auth0Domain]);
    
    return { data, loading, error };
}

export {
    useUserMetadata
}