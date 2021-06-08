import React, { useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ContextMenu, { Position } from 'devextreme-react/context-menu';
import List from 'devextreme-react/list';
import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigation } from '../../contexts/navigation';
import './user-panel.scss';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const publicUrl = process.env.PUBLIC_URL || '';

export default function ({ menuMode }) {
  const { user, logout } = useAuth0();
  const history = useHistory();
  // const { navigationData } = useNavigation();
  // const { currentPath } = navigationData;
  // console.log(currentPath)

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
      {user && (
        <div className={'user-info'}>
          <div className={'image-container'}>
            <div
              style={{
                background: `url(${user.picture}) no-repeat #fff`,
                backgroundSize: 'cover'
              }}
              className={'user-image'}
            />
          </div>
          <div className={'user-name'}>{user.email}</div>
        </div>
      )}

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
