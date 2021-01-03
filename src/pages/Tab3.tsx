import React, { useEffect } from 'react';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import useAuth from '../hooks/useAuth';

const Tab3: React.FC = () => {
  const { logout, user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    console.info(user);
    if (!user) {
      history.push('/login');
    }
    // eslint-disable-next-line
  }, [user]);
  return (
    <IonPage className="fade-in">
      <IonContent className="ion-padding" fullscreen>
        <ExploreContainer name="Mon Profil">
          <IonButton onClick={() => logout()} className="ion-margin-top" color="warning">Se déconnecter</IonButton>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
