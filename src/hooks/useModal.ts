import React, { useContext, useState } from 'react';
import ModalContext, { ModalContainerProps } from '../contexts/ModalContext';
import ModalLinkSpotify from '../components/modals/ModalLinkSpotify/ModalLinkSpotify';
import { ModalEvent } from '../types';

const useModal = () => {
  const modalContext = useContext(ModalContext);
  const [modalState, setModalState] = useState(modalContext);

  const setVisibility = (visible: boolean) => {
    setModalState({ ...modalState, isOpen: visible });
    modalContext.set({ ...modalState, isOpen: visible });
  };

  const setLastEvent = (event: ModalEvent) => {
    setModalState({ ...modalState, lastEvent: event });
    modalContext.set({ ...modalState, lastEvent: event });
  };

  const setConfiguration = (mode: 'ios' | 'md' = 'ios', animated = true, showBackdrop = true,
    lines: 'default' | 'one-line' = 'default', content: React.FC) => {
    console.info('[useModal.setConfiguration]: ', {
      ...modalState, mode, animated, showBackdrop, lines, content,
    });
    setModalState({
      ...modalState, mode, animated, showBackdrop, lines, content,
    });
    modalState.set({
      ...modalState, mode, animated, showBackdrop, lines, content,
    });
  };
  const openModal = (moduleRef: React.FC, configuration: Partial<ModalContainerProps>) => {
    setModalState({
      ...modalState, ...configuration, isOpen: true, content: moduleRef,
    });
    modalState.set({
      ...modalState, ...configuration, isOpen: true, content: moduleRef,
    });
  };

  const openSpotify = () => {
    openModal(ModalLinkSpotify, { isClosable: false, lines: 'one-line' });
  };

  return {
    modalState,
    setModalState,
    setVisibility,
    setConfiguration,
    setLastEvent,
    openSpotify,
    openModal,
  };
};

export default useModal;
