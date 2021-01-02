import React from 'react';

// TODO Remove eslint-suppress
interface ContainerProps {
  isOpen: boolean,
  props: {},
  // eslint-disable-next-line no-unused-vars
  set: (a: any) => void;
}

const ModalContext = React.createContext<ContainerProps>({
  isOpen: false,
  props: {},
  set: () => {},
});

export default ModalContext;
