/* PLAYLISTS  */
import { Playlist } from '../types';

/* PLAYER */
const getPlaylistTracks = async (userID: string, playlistID: string, offset: number): Promise<any> => fetch(`https://js-api.enoviah.fr/spotify/${userID}/playlists/${playlistID}/tracks?offset=${offset}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

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

/* AUTH */
const createUser = async (firstName: string, lastName: string, email: string, password: string, confirmPassword: string): Promise<any> => fetch('https://js-api.enoviah.fr/users', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }),
}).then((data) => data.json());

const login = async (email: string, password: string): Promise<any> => fetch('https://auth.outworld.fr/oauth/token', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: email,
    password,
    client_id: 'XDXL4KsZd6oKgNga',
    client_secret: 'DmH1kk5Ssqb2P3DesyDG7QYhsBo5EJAy',
    grant_type: 'password',
  }),
}).then((data) => data.json());

export default {
  getPlaylists, postPlaylists, postTrackInPlaylist, getPlayer, createUser, login, getPlaylistTracks,
};
