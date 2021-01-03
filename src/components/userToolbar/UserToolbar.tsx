import React from 'react';
import './UserToolbar.scss';
import {
  IonAvatar, IonHeader, IonText, IonToolbar,
} from '@ionic/react';
import useApp from '../../hooks/useApp';

interface ContainerProps {
}

// eslint-disable-next-line react/prop-types
const UserToolbar: React.FC<ContainerProps> = () => {
  const { user } = useApp();
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar color="seashell">
        <div slot="start">
          <div>
            <h5><IonText color="medium">Good morning,</IonText></h5>
            <h1 className="ion-no-margin font-bold">
              <IonText color="primary">
                {user?.firstName || '{user}'}
              </IonText>
            </h1>
          </div>
        </div>

        <IonAvatar slot="primary">
          <img alt="Your avatar" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
      </IonToolbar>
    </IonHeader>
  );
};
export default UserToolbar;
