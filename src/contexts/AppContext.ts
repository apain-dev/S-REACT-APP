import React from 'react';
import { Playlist } from '../types';

interface ContainerProps {
  albums: [];
  playlists: Playlist[];
  user: undefined;
  // eslint-disable-next-line no-unused-vars
  set: (a: any) => void;
}

const AppContext = React.createContext<ContainerProps>({
  albums: [],
  playlists: [],
  user: undefined,
  set: () => {},
});

export default AppContext;
