import React from 'react';
import './profile.scss';
// import ResponsiveBox, {
//   Row,
//   Col,
//   Item,
//   Location
// } from 'devextreme-react/responsive-box';
import Form from 'devextreme-react/form';
import LoadPanel from 'devextreme-react/load-panel';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserMetadata } from '../../api/user-metadata';
// import { useScreenSize } from '../../utils/media-query';

const Avatar = ({ picture }) => (
  <div className={'form-avatar'}>
    <img alt={''} src={picture} />
  </div>
);

const ProfileForm = ({ formData }) => (
  <Form
    id={'form'}
    defaultFormData={formData}
    labelLocation={'top'}
    colCountByScreen={colCountByScreen}
    readOnly={true}
  />
);

// function screen(width) {
//   console.log(width);
//   return width < 600 ? 'xs' : width < 960 ? 'sm' : width < 1280 ? 'md' : 'lg';
// }

export default () => {
  const { user } = useAuth0();
  const { userMetadata, loading, error } = useUserMetadata({
    userId: user.sub
  });
  if (error) console.log(error);
  // const { isXSmall, isSmall, isMedium } = useScreenSize();

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Profile</h2>

      {!!loading ? (
        <LoadPanel visible={true} />
      ) : (
        <div className={'content-block dx-card responsive-paddings'}>
          <Avatar picture={user.picture} />
          <ProfileForm formData={userMetadata} />
        </div>
      )}
    </React.Fragment>
  );
};

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
