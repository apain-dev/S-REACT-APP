import React from 'react';
import './ModalHandler.scss';
import { IonModal } from '@ionic/react';
import ModalContext from '../../contexts/ModalContext';

interface ContainerProps {
}

// eslint-disable-next-line react/prop-types
const ModalHandler: React.FC<ContainerProps> = () => {
  const renderModal = (modalState: any) => {
    const ActiveModal = modalState.content;
    if (!ActiveModal) {
      return null;
    }
    return <ActiveModal />;
  };

  const dismiss = (modalState: any) => {
    if (modalState.isClosable) {
      modalState.set({ ...modalState, isOpen: false });
    }
  };
  return (
    <ModalContext.Consumer>
      {
        (modalState) => (
          <IonModal
            mode={modalState.mode}
            animated={modalState.animated}
            showBackdrop={modalState.showBackdrop}
            isOpen={modalState.isOpen}
            cssClass={modalState.lines}
            onDidDismiss={() => dismiss(modalState)}
          >
            {renderModal(modalState)}
          </IonModal>
        )
      }
    </ModalContext.Consumer>
  );
};

export default ModalHandler;
