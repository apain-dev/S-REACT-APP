import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonSlide,
  IonSlides,
  IonText,
  IonToast,
} from '@ionic/react';
import './Register.css';
import { useHistory } from 'react-router';
import {
  arrowForwardOutline, at, lockClosed, personOutline,
} from 'ionicons/icons';
import useAuth from '../../hooks/useAuth';

interface UserVM {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const history = useHistory();
  const { createUser, setUser } = useAuth();
  const [toast, setToast] = useState({ isOpen: false, text: '' });
  const [userVM, setUserVM] = useState<UserVM>({
    email: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    password: '',
  });
  const register = () => {
    createUser(
      userVM.firstName, userVM.lastName, userVM.email, userVM.password, userVM.confirmPassword,
    )
      .then((result) => {
        if (!result.code) {
          setUser(result);
          history.push('/home');
        } else {
          setToast({ isOpen: true, text: result.message });
        }
      });
  };
  return (
    <IonPage className="">
      <IonContent color="dark" class="ion-padding" fullscreen>
        <IonToast
          cssClass="ion-text-center"
          isOpen={toast.isOpen}
          color="warning"
          onDidDismiss={() => setToast({ isOpen: false, text: '' })}
          message={toast.text}
          duration={5000}
        />
        <IonSlides>

          <IonSlide>
            <div className="slide">
              <img alt="an elephant" src="/assets/undraw/undraw_happy_music_g6wc.svg" />
              <h2>Bienvenue !</h2>
              <p>
                Voici
                <IonText color="primary"> JS-Spotify </IonText>
                {' '}
                une application réalisée dans le but du module Javascript à Epitech.
              </p>
            </div>
          </IonSlide>

          <IonSlide>
            <h2 className="ion-margin-bottom">INSCRIPTION</h2>
            <IonSearchbar
              className="ion-margin-top"
              color="seashell"
              value={userVM.firstName}
              placeholder="Jackie"
              type="text"
              searchIcon={personOutline}
              mode="ios"
              onIonChange={(e) => setUserVM({ ...userVM, firstName: e.detail.value || '' })}
            />
            <IonSearchbar
              color="seashell"
              value={userVM.lastName}
              placeholder="Tuning"
              searchIcon={personOutline}
              type="text"
              mode="ios"
              onIonChange={(e) => setUserVM({ ...userVM, lastName: e.detail.value || '' })}
            />
            <IonSearchbar
              color="seashell"
              value={userVM.email}
              searchIcon={at}
              type="email"
              placeholder="jackie.tuning@gmail.com"
              mode="ios"
              onIonChange={(e) => setUserVM({ ...userVM, email: e.detail.value || '' })}
            />
            <IonSearchbar
              color="seashell"
              value={userVM.password}
              type="password"
              searchIcon={lockClosed}
              placeholder="qz@sdf!z57"
              mode="ios"
              onIonChange={(e) => setUserVM({ ...userVM, password: e.detail.value || '' })}
            />
            <IonSearchbar
              color="seashell"
              type="password"
              value={userVM.confirmPassword}
              searchIcon={lockClosed}
              placeholder="qz@sdf!z57"
              mode="ios"
              onIonChange={(e) => setUserVM({ ...userVM, confirmPassword: e.detail.value || '' })}
            />
            <IonButton color="primary" onClick={() => register()}>
              S&apos;inscrire
              <IonIcon slot="end" icon={arrowForwardOutline} />
            </IonButton>
            <IonButton size="small" fill="clear" routerLink="/login" routerDirection="root">
              J&apos;ai déjà un compte
            </IonButton>
          </IonSlide>

        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Register;
