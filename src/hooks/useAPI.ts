import RequestService from '../services/request-service';

const useAPI = () => ({
  getPlaylists: RequestService.getPlaylists,
  getPlayer: RequestService.getPlayer,
  postTrackInPlaylist: RequestService.postTrackInPlaylist,
  postPlaylists: RequestService.postPlaylists,
});

export default useAPI;
