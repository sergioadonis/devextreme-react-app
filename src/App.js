import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './dx-styles.scss';
import LoadPanel from 'devextreme-react/load-panel';
import { NavigationProvider } from './contexts/navigation';
// import { AuthProvider, useAuth } from './contexts/auth';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useScreenSizeClass } from './utils/media-query';
import Content from './Content';
import UnauthenticatedContent from './UnauthenticatedContent';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <LoadPanel visible={true} />;
  }

  if (user) {
    return <Content />;
  }

  return <UnauthenticatedContent />;
}

export default function () {
  const screenSizeClass = useScreenSizeClass();

  return (
    <Router>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        useRefreshTokens={true}
        audience={`https://${domain}/api/v2/`}
        scope="read:current_user update:current_user_metadata"
      >
        <NavigationProvider>
          <div className={`app ${screenSizeClass}`}>
            <App />
          </div>
        </NavigationProvider>
      </Auth0Provider>
    </Router>
  );
}
