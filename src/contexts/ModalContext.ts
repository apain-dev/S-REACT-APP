import React, { Dispatch } from 'react';

interface ContainerProps {
  isOpen: boolean;
  mode: 'ios' | 'md';
  animated: boolean;
  showBackdrop: boolean;
  set: Dispatch<ContainerProps>;
}

const ModalContext = React.createContext<ContainerProps>({
  isOpen: false,
  mode: 'ios',
  animated: true,
  showBackdrop: true,
  set: () => {},
});

ModalContext.displayName = 'ModalContext';

export default ModalContext;
