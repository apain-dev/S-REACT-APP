import { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';
import RequestService from '../services/request-service';

const usePlaylists = () => {
  const appContext = useContext(AppContext);
  const [playlists, setPlaylists] = useState(appContext.playlists);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const createOne = (userID: string, body: any) => RequestService.postPlaylists(userID, body);
  const updateOne = () => {
  };
  const deleteOne = () => {
  };
  const getOne = async (playlistID: string) => {
    const thePlaylist = playlists.filter((item) => item.id === playlistID)[0];
    if (!thePlaylist) {
      // await TODO Make request
      // Push in the state
      // Affect new thePlaylist
    }
    return thePlaylist;
  };
  const getMany = async (userID: string) => {
    setLoading(true);
    const newPlaylists = await RequestService.getPlaylists(userID, offset);
    setPlaylists(newPlaylists);
    /** REALLY IMPORTANT UPDATE THE CONTEXT TO MAKE THE DATA GLOBAL * */
    appContext.playlists = newPlaylists;
    setLoading(false);
    return newPlaylists;
  };

  const getTracks = async (userID: string, playlistID: string) => {
    const tracks = await RequestService.getPlaylistTracks(userID, playlistID, 0);
    return (tracks);
  };

  return {
    playlistsAdapter: {
      playlists,
      loading,
      offsetAdapter: {
        offset,
        setOffset,
      },
      getTracks,
      createOne,
      updateOne,
      deleteOne,
      getOne,
      getMany,
    },
  };
};

export default usePlaylists;
