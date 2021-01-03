import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonSlide,
  IonSlides,
  IonToast,
} from '@ionic/react';
import './Login.css';
import { useHistory } from 'react-router';
import {
  arrowForwardOutline, at, lockClosed,
} from 'ionicons/icons';
import useAuth from '../../hooks/useAuth';

interface UserVM {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const { login, setUser, getAccount } = useAuth();
  const [toast, setToast] = useState({ isOpen: false, text: '' });
  const [userVM, setUserVM] = useState<UserVM>({
    email: '',
    password: '',
  });
  const loginVM = () => {
    login(
      userVM.email, userVM.password,
    )
      .then((result) => {
        if (!result.code) {
          getAccount(result.access_token).then((data) => {
            setUser(data);
            history.push('/home');
          });
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
            <h2 className="ion-margin-bottom">CONNEXION</h2>
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
            <IonButton color="primary" onClick={() => loginVM()} routerDirection="root">
              Se connecter
              <IonIcon slot="end" icon={arrowForwardOutline} />
            </IonButton>
            <IonButton className="ion-margin-top" size="small" fill="clear" routerLink="/register" routerDirection="root">
              Je n&apos;ai pas de compte
            </IonButton>
          </IonSlide>

        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Login;
