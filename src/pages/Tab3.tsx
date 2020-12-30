import React from 'react';
import
{
  IonAvatar,
  IonContent, IonHeader, IonPage, IonText, IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => (
  <IonPage>
    <IonContent fullscreen>
      <IonHeader collapse="condense" className="ion-no-border ion-padding">
        <IonToolbar>
          <div slot="secondary">
            <p>
              <h4 className="ion-no-margin"><IonText color="light">Good morning,</IonText></h4>
              <h1 className="ion-no-margin font-bold"><IonText color="danger">Sophia</IonText></h1>
            </p>
          </div>

          <IonAvatar slot="primary">
            <img alt="Your avatar" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name="Tab 3 page" />
    </IonContent>
  </IonPage>
);

export default Tab3;
