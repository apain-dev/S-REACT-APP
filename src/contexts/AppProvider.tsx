import React, { useContext, useState } from 'react';
import '../components/ModalHandler/ModalHandler.scss';
import AppContext from './AppContext';

interface ContainerProps {
  children: any;
}

// eslint-disable-next-line react/prop-types
const AppProvider: React.FC<ContainerProps> = ({ children } : ContainerProps) => {
  const appContext = useContext(AppContext);
  const [appState, setAppState] = useState(appContext);
  appState.set = setAppState;
  return (
    <AppContext.Provider value={appState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
