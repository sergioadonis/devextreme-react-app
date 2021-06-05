import React, { useState, useEffect } from 'react';
import './profile.scss';
import Form from 'devextreme-react/form';
import { useAuth0 } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

export default () => {
  const [notes, setNotes] = useState(
    'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.'
  );

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user'
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const { user_metadata } = await metadataResponse.json();
        // console.log(user_metadata);

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user]);

  const employee = {
    ID: 7,
    FirstName: 'Sandra',
    LastName: 'Johnson',
    Prefix: 'Mrs.',
    Position: 'Controller',
    Picture: user.avatar_url,
    BirthDate: new Date('1974/11/15'),
    HireDate: new Date('2005/05/11'),
    Notes: notes,
    Address: '4600 N Virginia Rd.'
  };

  return (
    isAuthenticated && (
      <React.Fragment>
        <h2 className={'content-block'}>Profile</h2>

        {userMetadata && userMetadata.avatar_url && (
          <div className={'content-block dx-card responsive-paddings'}>
            <div className={'form-avatar'}>
              <img alt={''} src={userMetadata.avatar_url} />
            </div>
            <span>{notes}</span>
          </div>
        )}

        <div className={'content-block dx-card responsive-paddings'}>
          <Form
            id={'form'}
            defaultFormData={employee}
            onFieldDataChanged={(e) =>
              e.dataField === 'Notes' && setNotes(e.value)
            }
            labelLocation={'top'}
            colCountByScreen={colCountByScreen}
          />
        </div>
      </React.Fragment>
    )
  );
};

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
