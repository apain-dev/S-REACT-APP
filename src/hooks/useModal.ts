import { useContext, useState } from 'react';
import ModalContext from '../contexts/ModalContext';

const useModal = () => {
  const modalContext = useContext(ModalContext);
  const [isOpen, setOpen] = useState(modalContext.isOpen);

  function setVisible(visible: boolean) {
    setOpen(visible);
    modalContext.isOpen = visible;
  }

  return {
    isOpen,
    setVisible,
  };
};

export default useModal;
