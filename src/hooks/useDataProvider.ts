import { useState } from 'react';
import useAPI from './useAPI';
import { Playlist } from '../types';

const useDataProvider = () => {
  const { getPlaylists } = useAPI();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const Playlists = () => {
    const [page, setPage] = useState(0);
    return {
      page,
      setPage,
      state: playlists,
      clear: () => {
        setPlaylists([]);
        setPage(0);
      },
      set: setPlaylists,
      getAll: async (userID: string) => {
        const response = await getPlaylists(userID, page);
        setPlaylists(response);
        return (response);
      },
    };
  };

  return {
    playlists: Playlists(),
  };
};

export default useDataProvider;
