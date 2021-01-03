import React, { Dispatch } from 'react';
import { AuthUser, Playlist } from '../types';

interface ContainerProps {
  albums: [];
  playlists: Playlist[];
  user: AuthUser | undefined;
  set: Dispatch<ContainerProps>;
}

const getUser = () => {
  const user = localStorage.getItem('OW_USER');
  if (!user) {
    return undefined;
  }
  return (JSON.parse(user));
};

const AppContext = React.createContext<ContainerProps>({
  albums: [],
  playlists: [],
  user: getUser(),
  set: () => {},
});

AppContext.displayName = 'AppContext';

export default AppContext;
