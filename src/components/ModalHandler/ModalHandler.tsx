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
        (modalState) => (
          <IonModal mode={modalState.mode} animated={modalState.animated} swipeToClose showBackdrop={modalState.showBackdrop} isOpen={modalState.isOpen} cssClass="my-custom-class" onDidDismiss={() => modalState.set({ ...modalState, isOpen: false })}>
            <p>YEAHHHH</p>
          </IonModal>
        )
      }
  </ModalContext.Consumer>
);

export default ModalHandler;
