import React, { useContext, useState } from 'react';
import './ModalHandler.scss';
import ModalContext from '../../contexts/ModalContext';

interface ContainerProps {
  children: any;
}

// eslint-disable-next-line react/prop-types
const ModalProvider: React.FC<ContainerProps> = ({ children } : ContainerProps) => {
  const modalContext = useContext(ModalContext);
  const [modalContextData, setModalContextData] = useState(modalContext);
  modalContextData.setVisibility = (visible: boolean) => {
    setModalContextData({ ...modalContextData, isOpen: visible });
  };
  return (
    <ModalContext.Provider value={modalContextData}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
