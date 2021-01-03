import React, { useEffect, useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import './PlaylistID.scss';
import { useParams } from 'react-router';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import usePlaylists from '../../hooks/usePlaylists';
import { Playlist } from '../../types';
import ModalContext from '../../contexts/ModalContext';
import useModal from '../../hooks/useModal';
import useApp from '../../hooks/useApp';

const PlaylistID: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useApp();
  const { playlistsAdapter } = usePlaylists();
  const { setVisibility } = useModal();
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist>();

  useEffect(() => {
    if (user) {
      playlistsAdapter.getOne(id).then((item) => {
        setCurrentPlaylist(item);
        // eslint-disable-next-line no-underscore-dangle
        playlistsAdapter.getTracks(user._id, id);
      });
    }
    // eslint-disable-next-line
  }, [id]);

  return (
    <IonPage className="slide-in-bottom">
      <IonContent fullscreen>
        <section className="ion-padding">
          <IonHeader className="ion-no-border">
            <IonToolbar color="seashell">
              <div slot="start">
                <IonBackButton color="dark" defaultHref="home" />
              </div>
              <IonButtons slot="primary">
                <IonButton color="dark">
                  <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonCard className="ion-margin-bottom">
            <img alt="an elephant" src={currentPlaylist?.images[0]?.url || '/assets/card-album.png'} />
          </IonCard>
        </section>
        <ModalContext.Consumer>
          {
            (modalState) => (
              <IonButton onClick={() => setVisibility(true)}>
                {modalState.mode}
              </IonButton>
            )
          }
        </ModalContext.Consumer>
        <IonCard className="ion-no-margin ion-padding">
          <IonList>
            {
              ([''].fill('', 0, currentPlaylist?.tracks.total)).map((track) => (
                <IonItemSliding>
                  <IonItem>
                    <IonLabel>{track}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption onClick={() => {
                    }}
                    >
                      Unread
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              ))
            }
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PlaylistID;
