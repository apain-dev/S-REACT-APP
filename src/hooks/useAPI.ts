import RequestService from '../services/request-service';

const useAPI = () => ({
  getPlaylists: RequestService.getPlaylists,
  getPlayer: RequestService.getPlayer,
  postTrackInPlaylist: RequestService.postTrackInPlaylist,
  postPlaylists: RequestService.postPlaylists,
  createUser: RequestService.createUser,
  login: async (email: string, password: string) => {
    const loginResult = await RequestService.login(email, password);
    if (loginResult && loginResult.access_token) {
      localStorage.setItem('OW_ACCESS_TOKEN', loginResult.access_token);
    }
    return (loginResult);
  },
  getAccount: RequestService.getAccount,
});

export default useAPI;
