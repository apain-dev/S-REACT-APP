import React, { Dispatch } from 'react';
import { ModalEvent } from '../types';

export interface ModalContainerProps {
  isOpen: boolean;
  mode: 'ios' | 'md';
  content: React.FC | null;
  lines: 'default' | 'one-line';
  animated: boolean;
  showBackdrop: boolean;
  isClosable: boolean;
  set: Dispatch<ModalContainerProps>;
  lastEvent: ModalEvent;
}

const ModalContext = React.createContext<ModalContainerProps>({
  isOpen: false,
  content: null,
  lines: 'default',
  isClosable: true,
  mode: 'ios',
  animated: true,
  showBackdrop: true,
  lastEvent: -1,
  set: () => {},
});

ModalContext.displayName = 'ModalContext';

export default ModalContext;
