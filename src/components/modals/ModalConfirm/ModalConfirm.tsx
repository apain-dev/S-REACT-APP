import React from 'react';
import './ModalConfirm.scss';
import { IonButton } from '@ionic/react';
import useModal from '../../../hooks/useModal';
import { ModalEvent } from '../../../types';

interface ContainerProps {
}

// eslint-disable-next-line react/prop-types
const ModalConfirm: React.FC<ContainerProps> = () => {
  const { setLastEvent } = useModal();
  return (
    <div className="d-flex ion-justify-content-around">
      <IonButton
        className="ion-text-uppercase"
        color="warning"
        onClick={() => setLastEvent(ModalEvent.MODAL_CANCEL_CLICKED)}
      >
        Annuler
      </IonButton>
      <IonButton
        className="ion-text-uppercase"
        color="success"
        onClick={() => setLastEvent(ModalEvent.MODAL_CONFIRM_CLICKED)}
      >
        Confirmer
      </IonButton>
    </div>
  );
};

export default ModalConfirm;
