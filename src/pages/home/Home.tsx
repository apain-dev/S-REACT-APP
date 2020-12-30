import React from 'react';
import {
  IonAvatar, IonContent, IonHeader, IonPage, IonSearchbar, IonText, IonToolbar,
} from '@ionic/react';
import './Home.css';
import { heartOutline, laptopOutline, rocketOutline } from 'ionicons/icons';
import IconCard from '../../components/cards/IconCard/IconCard';

const Home: React.FC = () => (
  <IonPage>
    <IonContent fullscreen>
      <IonHeader collapse="condense" className="ion-no-border ion-padding">
        <IonToolbar>
          <div slot="secondary">
            <p>
              <h4 className="ion-no-margin"><IonText color="light">Good morning,</IonText></h4>
              <h1 className="ion-no-margin font-bold"><IonText color="danger">Sophia !</IonText></h1>
            </p>
          </div>

          <IonAvatar slot="primary">
            <img alt="Your avatar" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonToolbar>
          <IonSearchbar className="ion-no-padding" placeholder="Search Favorites" />
        </IonToolbar>
        <section className="inline-scroll">
          <IconCard icon={heartOutline} />
          <IconCard icon={rocketOutline} />
          <IconCard icon={laptopOutline} />
        </section>
      </IonContent>
    </IonContent>
  </IonPage>
);

export default Home;
