import { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';
import { AuthUser } from '../types';

const useApp = () => {
  const appContext = useContext(AppContext); // NO
  // eslint-disable-next-line no-unused-vars
  const [_user, _setUser] = useState(appContext.user); // NO

  const setUser = (user?: AuthUser) => {
    appContext.set({ ...appContext, user });
    if (user) {
      localStorage.setItem('OW_USER', JSON.stringify(user));
    }
  };

  return {
    appState: appContext,
    setAppState: appContext.set,
    user: _user,
    setUser,
  };
};

export default useApp;
