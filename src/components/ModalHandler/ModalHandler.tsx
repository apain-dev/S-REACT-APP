import React, { useContext, useEffect } from 'react';
import './ModalHandler.scss';
import { IonModal } from '@ionic/react';
import ModalContext from '../../contexts/ModalContext';

interface ContainerProps {
}

// eslint-disable-next-line react/prop-types
const ModalHandler: React.FC<ContainerProps> = () => {
  const context = useContext(ModalContext);
  useEffect(() => {
    console.info('[ModalHandler]: ContextEtat à instant T', context);
    // eslint-disable-next-line
  });
  return (
    <ModalContext.Consumer>
      {
        (modalContext) => (
          modalContext.isOpen ? (
            <IonModal isOpen cssClass="my-custom-class" onDidDismiss={() => modalContext.set({ ...modalContext, isOpen: false })}>
              <p>{JSON.stringify(modalContext)}</p>
            </IonModal>
          ) : null
        )
      }
    </ModalContext.Consumer>
  );
};

export default ModalHandler;
