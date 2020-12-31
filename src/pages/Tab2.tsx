import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './Tab2.css';
import Card from '../components/cards/Card';
import UserToolbar from '../components/userToolbar/UserToolbar';

const Tab2: React.FC = () => (
  <IonPage className="fade-in">
    <IonContent className="ion-padding" fullscreen>
      <UserToolbar />
      <section>
        <Card />
      </section>
    </IonContent>
  </IonPage>
);

export default Tab2;
