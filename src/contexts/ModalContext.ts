import React from 'react';

// TODO Remove eslint-suppress
interface ContainerProps {
  isOpen: boolean,
  props: {},
  // eslint-disable-next-line no-unused-vars
  setVisibility: (visible: boolean) => void,
  setClose: () => void
}

const ModalContext = React.createContext<ContainerProps>({
  isOpen: false,
  props: {},
  // eslint-disable-next-line no-unused-vars
  setVisibility: (visible: boolean) => {},
  setClose: () => {},
});

export default ModalContext;
