import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './Tab2.css';
import PlayerCard from '../components/cards/PlayerCard';
import UserToolbar from '../components/userToolbar/UserToolbar';

const Tab2: React.FC = () => (
  <IonPage className="fade-in">
    <IonContent className="ion-padding">
      <UserToolbar />
      <section>
        <PlayerCard />
      </section>
    </IonContent>
  </IonPage>
);

export default Tab2;
