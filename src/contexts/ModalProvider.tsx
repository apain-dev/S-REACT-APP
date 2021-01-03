import React from 'react';
import ModalContext from './ModalContext';
import useModal from '../hooks/useModal';

interface ContainerProps {
  children: any;
}

// eslint-disable-next-line react/prop-types
const ModalProvider: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  const { modalState, setModalState } = useModal();
  return (
    <ModalContext.Provider value={{ ...modalState, set: setModalState }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
