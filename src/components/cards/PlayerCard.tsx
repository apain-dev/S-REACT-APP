import React from 'react';
import './PlayerCard.css';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonIcon, IonProgressBar,
} from '@ionic/react';
import {
  play, playBack, playForward, repeat, shuffle,
} from 'ionicons/icons';

interface ContainerProps {
}

const PlayerCard: React.FC<ContainerProps> = () => (
  <IonCard className="music-card ion-no-margin ion-margin-top">
    <IonCardHeader>
      <img alt="An elephant." src="/assets/card-album.png" />
    </IonCardHeader>
    <IonCardContent text-center>
      <h2>29 #Strafford APTS</h2>
      <p>Bon Iver — 22, A Million</p>

      <IonProgressBar value={0.25} />

      <IonButton color="dark" fill="clear" size="small">
        <IonIcon slot="icon-only" icon={shuffle} />
      </IonButton>
      <IonButton color="dark" fill="clear" size="large">
        <IonIcon slot="icon-only" icon={playBack} />
      </IonButton>
      <IonButton color="dark" fill="clear" className="button-largest">
        <IonIcon slot="icon-only" icon={play} />
      </IonButton>
      <IonButton color="dark" fill="clear" size="large">
        <IonIcon slot="icon-only" icon={playForward} />
      </IonButton>
      <IonButton color="dark" fill="clear" size="small">
        <IonIcon slot="icon-only" icon={repeat} />
      </IonButton>
    </IonCardContent>
  </IonCard>
);

export default PlayerCard;
