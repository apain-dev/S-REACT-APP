import React from 'react';
import './ModalLinkSpotify.scss';
import { IonButton } from '@ionic/react';
import useModal from '../../../hooks/useModal';
import { ModalEvent } from '../../../types';
import AppContext from '../../../contexts/AppContext';

interface ContainerProps {
}

// eslint-disable-next-line react/prop-types
const ModalLinkSpotify: React.FC<ContainerProps> = () => {
  const { setLastEvent } = useModal();
  const constructURL = (userID?: string) => `https://accounts.spotify.com/authorize?client_id=65a9b9c03d2a4299b806d02b46f5823e&response_type=code&redirect_uri=https://js-api.enoviah.fr/spotify/callback&scope=user-read-private%20user-read-email%20user-read-playback-position%20user-top-read%20user-read-recently-played%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20app-remote-control%20playlist-modify-public%20playlist-modify-private%20playlist-read-private%20playlist-read-collaborative%20user-library-modify%20user-library-read&state=${userID}`;
  return (
    <AppContext.Consumer>
      {
        (state) => (
          // eslint-disable-next-line no-underscore-dangle
          <IonButton href={constructURL(state.user?._id)} target="_blank" className="ion-text-uppercase" color="success" onClick={() => { setLastEvent(ModalEvent.MODAL_ASK_CONFIRMATION); }}>
            Lier mon Spotify
          </IonButton>
        )
      }
    </AppContext.Consumer>
  );
};

export default ModalLinkSpotify;
