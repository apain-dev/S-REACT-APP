import React from 'react';
import AppContext from './AppContext';
import useApp from '../hooks/useApp';

interface ContainerProps {
  children: any;
}

// eslint-disable-next-line react/prop-types
const AppProvider: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  const { appState, setAppState } = useApp();
  return (
    <AppContext.Provider value={{ ...appState, set: setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
