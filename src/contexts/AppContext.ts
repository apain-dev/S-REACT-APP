import React, { Dispatch } from 'react';
import { Playlist } from '../types';

interface ContainerProps {
  albums: [];
  playlists: Playlist[];
  user: string | undefined;
  set: Dispatch<ContainerProps>;
}

const AppContext = React.createContext<ContainerProps>({
  albums: [],
  playlists: [],
  user: undefined,
  set: () => {},
});

AppContext.displayName = 'AppContext';

export default AppContext;
