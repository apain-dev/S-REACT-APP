import { useContext, useState } from 'react';
import ModalContext from '../contexts/ModalContext';

const useModal = () => {
  const modalContext = useContext(ModalContext);
  const [modalState, setModalState] = useState(modalContext);

  const setVisibility = (visible: boolean) => {
    setModalState({ ...modalState, isOpen: visible });
    modalState.set({ ...modalState, isOpen: visible });
  };

  const setConfiguration = (mode: 'ios' | 'md' = 'ios', animated = true, showBackdrop = true) => {
    setModalState({
      ...modalState, mode, animated, showBackdrop,
    });
    modalState.set({
      ...modalState, mode, animated, showBackdrop,
    });
  };

  const resetConfiguration = () => {
    setConfiguration();
  };

  return {
    modalState,
    setModalState,
    setVisibility,
    setConfiguration,
    resetConfiguration,
  };
};

export default useModal;
