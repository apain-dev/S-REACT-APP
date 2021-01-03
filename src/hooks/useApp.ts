import { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';

const useApp = () => {
  const appContext = useContext(AppContext);
  const [appState, setAppState] = useState(appContext);
  const [_user, _setUser] = useState(appState.user);

  const setUser = (user: string) => {
    _setUser(user);
    setAppState({ ...appState, user });
    appContext.set({ ...appState, user });
  };

  return {
    appState,
    setAppState,
    user: _user,
    setUser,
  };
};

export default useApp;
