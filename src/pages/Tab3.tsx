import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => (
  <IonPage className="fade-in">
    <IonContent className="ion-padding" fullscreen>
      <ExploreContainer name="Tab 3 page" />
    </IonContent>
  </IonPage>
);

export default Tab3;
