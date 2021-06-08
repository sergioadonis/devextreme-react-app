import React, { useState } from 'react';
import './profile.scss';
import Form from 'devextreme-react/form';
import LoadPanel from 'devextreme-react/load-panel';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserMetadata } from '../../api/user-metadata';

export default () => {
  const [notes, setNotes] = useState(
    'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.'
  );
  
  const { user } = useAuth0();
  const { userMetadata, loading, error } = useUserMetadata({userId: user.sub});

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
    Address: '4600 N Virginia Rd.',
    UserMetadata: error ? error : JSON.stringify(userMetadata)
  };

  return (
      <React.Fragment>
        <h2 className={'content-block'}>Profile</h2>

        {user && user.picture && (
          <div className={'content-block dx-card responsive-paddings'}>
            <div className={'form-avatar'}>
              <img alt={''} src={user.picture} />
            </div>
            <span>{notes}</span>
          </div>
        )}

        {!loading ? (
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
        ) : <LoadPanel visible={true} />}
      </React.Fragment>
  );
};

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
