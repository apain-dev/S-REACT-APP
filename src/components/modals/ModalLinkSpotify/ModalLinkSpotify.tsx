import React from 'react';
import './ModalLinkSpotify.scss';
import { IonButton } from '@ionic/react';
import useModal from '../../../hooks/useModal';
import { ModalEvent } from '../../../types';

interface ContainerProps {
}

// eslint-disable-next-line react/prop-types
const ModalLinkSpotify: React.FC<ContainerProps> = () => {
  const { setLastEvent } = useModal();
  return (
    <IonButton className="ion-text-uppercase" color="success" onClick={() => { setLastEvent(ModalEvent.MODAL_ASK_CONFIRMATION); }}>
      Lier mon Spotify
    </IonButton>
  );
};

export default ModalLinkSpotify;
