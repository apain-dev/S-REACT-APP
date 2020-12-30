import React from 'react';
import {
  IonAvatar, IonContent, IonHeader, IonPage, IonSearchbar, IonText, IonToolbar,
} from '@ionic/react';
import './Home.css';
import {
  heartOutline, laptopOutline, rocketOutline, watchOutline,
} from 'ionicons/icons';
import IconCard from '../../components/cards/IconCard/IconCard';

const Home: React.FC = () => (
  <IonPage>
    <IonContent class="ion-padding" fullscreen>
      <IonHeader className="ion-no-border">
        <IonToolbar color="secondary">
          <div slot="secondary">
            <div>
              <h5><IonText color="light">Good morning,</IonText></h5>
              <h1 className="ion-no-margin font-bold"><IonText color="danger">Sophia</IonText></h1>
            </div>
          </div>

          <IonAvatar slot="primary">
            <img alt="Your avatar" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonToolbar className="py-3">
        <IonSearchbar className="ion-no-padding" placeholder="Search Favorites" />
      </IonToolbar>
      <section className="ion-justify-content-between d-flex">
        <IconCard subtitle="Favoris" icon={heartOutline} />
        <IconCard subtitle="Populaire" icon={rocketOutline} />
        <IconCard subtitle="Aujourd'hui" icon={laptopOutline} />
        <IconCard subtitle="Récent" icon={watchOutline} />
      </section>
    </IonContent>
  </IonPage>
);

export default Home;
