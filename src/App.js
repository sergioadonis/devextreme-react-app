import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import './dx-styles.scss';
import LoadPanel from 'devextreme-react/load-panel';
import { NavigationProvider } from './contexts/navigation';
import { useEnvironment } from './contexts/environment';
import { AccessTokenProvider } from './contexts/access-token';
import { useScreenSizeClass } from './utils/media-query';
import Content from './Content';
import UnauthenticatedContent from './UnauthenticatedContent';

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
  const { publicUrl, auth0ClientId, auth0Domain, auth0Scope, auth0Audience } =
    useEnvironment();

  return (
    <Router>
      <Auth0Provider
        domain={auth0Domain}
        clientId={auth0ClientId}
        redirectUri={window.location.origin + publicUrl}
        useRefreshTokens={true}
        audience={auth0Audience}
        scope={auth0Scope}
      >
        <AccessTokenProvider scope={auth0Scope}>
          <NavigationProvider>
            <div className={`app ${screenSizeClass}`}>
              <App />
            </div>
          </NavigationProvider>
        </AccessTokenProvider>
      </Auth0Provider>
    </Router>
  );
}
