import useApp from './useApp';
import useAPI from './useAPI';

const useAuth = () => {
  const { appState, setUser } = useApp();
  const { createUser, login, getAccount } = useAPI();

  const logout = () => {
    if (appState.user) {
      setUser();
      localStorage.removeItem('OW_USER');
    }
  };

  return {
    user: appState.user,
    setUser,
    login,
    getAccount,
    logout,
    createUser,
  };
};

export default useAuth;
