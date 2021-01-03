import React, { useEffect } from 'react';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonLabel,
  IonListHeader,
  IonPage,
  IonProgressBar,
  IonSearchbar,
  IonSlide,
  IonSlides,
  IonToolbar,
} from '@ionic/react';
import './Home.scss';
import {
  arrowForwardOutline, flameOutline, heartOutline, rocketOutline, watchOutline,
} from 'ionicons/icons';
import IconCard from '../../components/cards/IconCard/IconCard';
import UserToolbar from '../../components/userToolbar/UserToolbar';
import usePlaylists from '../../hooks/usePlaylists';
import ModalContext from '../../contexts/ModalContext';

const Home: React.FC = () => {
  const { playlistsAdapter } = usePlaylists();
  const slidesOptions = {
    slidesPerView: 1.5,
    // autoHeight: true,
  };
  useEffect(() => {
    playlistsAdapter.getMany('5fef02bf55cd391d8de1a23d');
    // eslint-disable-next-line
  }, [playlistsAdapter.offsetAdapter.offset]);

  return (
    <IonPage className="fade-in">
      <IonContent class="ion-padding" fullscreen>
        <UserToolbar />
        <IonToolbar className="py-3">
          <IonSearchbar mode="ios" className="ion-no-padding" placeholder="Un album, un artiste, une chanson..." />
        </IonToolbar>
        <section className="ion-justify-content-between d-flex">
          <ModalContext.Consumer>
            {
              (modalState) => (
                <>
                  <IconCard
                    subtitle="Favoris"
                    onClick={() => modalState.set({ ...modalState, isOpen: true })}
                    icon={heartOutline}
                  />
                  <IconCard subtitle="Populaire" icon={rocketOutline} />
                  <IconCard subtitle="Aujourd'hui" icon={flameOutline} />
                  <IconCard subtitle="Récent" icon={watchOutline} />
                </>
              )
            }

          </ModalContext.Consumer>
        </section>

        <section>
          <IonListHeader className="ion-no-padding">
            <IonLabel>Mes playlists</IonLabel>
            <IonButton color="primary" fill="outline">
              <IonIcon slot="icon-only" icon={arrowForwardOutline} />
            </IonButton>
          </IonListHeader>
          {
            playlistsAdapter.playlists.length === 0 && (
              <IonCard button>
                <IonCardHeader>
                  <img alt="an elephant" src="/assets/undraw/undraw_happy_music_g6wc.svg" />
                </IonCardHeader>
                <IonCardContent class="ion-text-center">
                  <IonCardTitle class="ion-margin-bottom">Aucune playlist</IonCardTitle>
                  <IonCardSubtitle>oops</IonCardSubtitle>
                  <IonProgressBar value={0.5} color="custom" />
                </IonCardContent>
              </IonCard>
            )
          }
          <IonSlides pager={playlistsAdapter.playlists.length > 0} options={slidesOptions} className="ion-no-padding">
            {
              playlistsAdapter.playlists.length > 0
              && playlistsAdapter.playlists.map((projection) => (
                <IonSlide key={projection.id}>
                  <IonCard button routerLink={`/playlists/${projection.id}`}>
                    <IonCardHeader>
                      <img alt="an elephant" src={projection?.images[0]?.url || '/assets/card-album.png'} />
                    </IonCardHeader>
                    <IonCardContent class="ion-text-center">
                      <IonCardTitle class="ion-margin-bottom">
                        {projection.name}
                      </IonCardTitle>
                      <IonCardSubtitle>
                        <div className="ion-margin-bottom">
                          <IonBadge
                            color={projection.public ? 'primary' : 'dark'}
                          >
                            {projection.public ? 'Publique' : 'Privé'}
                          </IonBadge>
                        </div>
                        <div>
                          {projection.tracks.total}
                          {' '}
                          Titres
                        </div>
                      </IonCardSubtitle>
                      <IonProgressBar value={0.5} color="custom" />
                    </IonCardContent>
                  </IonCard>
                </IonSlide>
              ))
            }
          </IonSlides>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
