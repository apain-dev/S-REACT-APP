import React from 'react';

interface ContainerProps {
  albums: [];
  playlists: [];
  user: undefined;
}

const AppContext = React.createContext<ContainerProps>({
  albums: [],
  playlists: [],
  user: undefined,
});

export default AppContext;
