import React from 'react';
import './ModalHandler.scss';
import { IonModal } from '@ionic/react';
import ModalContext from '../../contexts/ModalContext';

interface ContainerProps {
}

// eslint-disable-next-line react/prop-types
const ModalHandler: React.FC<ContainerProps> = () => (
  <ModalContext.Consumer>
    {
      (value) => (
        value.isOpen ? (
          <IonModal isOpen cssClass="my-custom-class" onDidDismiss={() => value.setVisibility(false)}>
            <p>This is modal content</p>
          </IonModal>
        ) : null
      )
    }
  </ModalContext.Consumer>
);

export default ModalHandler;
