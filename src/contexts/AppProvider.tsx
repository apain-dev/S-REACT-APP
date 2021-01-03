import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';

interface ContainerProps {
  children: any;
}

// eslint-disable-next-line react/prop-types
const AppProvider: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  const appContext = useContext(AppContext);
  const [state, setState] = useState(appContext);
  const getUser = () => {
    const user = localStorage.getItem('OW_USER');
    if (!user) {
      return undefined;
    }
    return (JSON.parse(user));
  };
  useEffect(() => {
    setState({ ...state, user: getUser() });
    // eslint-disable-next-line
  }, [])
  return (
    <AppContext.Provider value={{ ...state, set: setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
