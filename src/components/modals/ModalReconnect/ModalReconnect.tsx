import React from 'react';
import './ModalReconnect.scss';
import { IonButton } from '@ionic/react';

interface ContainerProps {
}

// eslint-disable-next-line react/prop-types
const ModalReconnect: React.FC<ContainerProps> = () => (

  <IonButton routerLink="/login" routerDirection="root" className="ion-text-uppercase" color="primary">
    Me reconnecter
  </IonButton>
);

export default ModalReconnect;
