import React, { useMemo, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContextMenu, { Position } from 'devextreme-react/context-menu';
import List from 'devextreme-react/list';
// import { useAuth } from '../../contexts/auth';
import { useAuth0 } from '@auth0/auth0-react';
import './user-panel.scss';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const publicUrl = process.env.PUBLIC_URL || '';

export default function ({ menuMode }) {
  // const { user, signOut } = useAuth();
  const { user, logout, getAccessTokenSilently } = useAuth0();
  const history = useHistory();

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

  const navigateToProfile = useCallback(
    () => history.push('/profile'),
    [history]
  );

  const menuItems = useMemo(
    () => [
      {
        text: 'Profile',
        icon: 'user',
        onClick: navigateToProfile
      },
      {
        text: 'Logout',
        icon: 'runner',
        onClick: () => logout({ returnTo: window.location.origin + publicUrl })
      }
    ],
    [navigateToProfile, logout]
  );

  return (
    <div className={'user-panel'}>
      <div className={'user-info'}>
        {user && user.picture && (
          <div className={'image-container'}>
            <div
              style={{
                background: `url(${user.picture}) no-repeat #fff`,
                backgroundSize: 'cover'
              }}
              className={'user-image'}
            />
          </div>
        )}
        <div className={'user-name'}>{user.email}</div>
      </div>

      {menuMode === 'context' && (
        <ContextMenu
          items={menuItems}
          target={'.user-button'}
          showEvent={'dxclick'}
          width={400}
          cssClass={'user-menu'}
        >
          <Position my={'top center'} at={'bottom center'} />
        </ContextMenu>
      )}
      {menuMode === 'list' && (
        <List className={'dx-toolbar-menu-action'} items={menuItems} />
      )}
    </div>
  );
}
