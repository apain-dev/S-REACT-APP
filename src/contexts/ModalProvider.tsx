import React, { useContext, useState } from 'react';
import '../components/ModalHandler/ModalHandler.scss';
import ModalContext from './ModalContext';

interface ContainerProps {
  children: any;
}

// eslint-disable-next-line react/prop-types
const ModalProvider: React.FC<ContainerProps> = ({ children } : ContainerProps) => {
  const modalContext = useContext(ModalContext);
  const [modalState, setModalState] = useState(modalContext);
  modalState.set = setModalState;
  return (
    <ModalContext.Provider value={modalState}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
