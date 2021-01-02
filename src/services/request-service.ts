/* PLAYLISTS  */
import { Playlist } from '../types';

const getPlaylists = async (userID: string, offset: number): Promise<Playlist[]> => fetch(`https://js-api.enoviah.fr/spotify/${userID}/playlists?offset=${offset}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}).then(
  (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  },
).then((json) => json.results);

const postPlaylists = async (userID: string, body: any): Promise<any> => fetch(`https://js-api.enoviah.fr/spotify/${userID}/playlists`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body,
});

const postTrackInPlaylist = async (userID: string, playlistID: string, body: any): Promise<any> => fetch(`https://js-api.enoviah.fr/spotify/${userID}/playlists/${playlistID}`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body,
});
/* PLAYER */
const getPlayer = async (userID: string): Promise<any> => fetch(`https://js-api.enoviah.fr/spotify/${userID}/player`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getPlaylists, postPlaylists, postTrackInPlaylist, getPlayer,
};
