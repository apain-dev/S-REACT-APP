import useApp from './useApp';
import useAPI from './useAPI';

const useAuth = () => {
  const { appState, setUser } = useApp();
  const { createUser, login } = useAPI();

  return {
    user: appState.user,
    setUser,
    login,
    createUser,
  };
};

export default useAuth;
