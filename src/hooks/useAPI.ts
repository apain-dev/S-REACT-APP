import RequestService from '../services/request-service';

const useAPI = () => ({
  getPlaylists: RequestService.getPlaylists,
  getPlayer: RequestService.getPlayer,
  postTrackInPlaylist: RequestService.postTrackInPlaylist,
  postPlaylists: RequestService.postPlaylists,
  createUser: RequestService.createUser,
  login: RequestService.login,
});

export default useAPI;
