import React from 'react';
import {
  IonButton, IonIcon,
  IonContent, IonPage, IonSlide, IonSlides, IonText,
} from '@ionic/react';
import './Register.css';
import { useHistory } from 'react-router';
import useApp from '../../hooks/useApp';

const Register: React.FC = () => {
  const history = useHistory();
  const { setUser } = useApp();
  const register = () => {
    setUser('Azword');
    history.push('/home');
  };
  return (
    <IonPage className="fade-in">
      <IonContent color="dark" class="ion-padding" fullscreen>
        <IonSlides>

          <IonSlide>
            <div className="slide">
              <img alt="an elephant" src="/assets/undraw/undraw_happy_music_g6wc.svg" />
              <h2>Welcome</h2>
              <p>
                The
                <IonText color="primary"> ionic conference app</IonText>
                {' '}
                is a practical preview of the ionic framework in action, and a
                demonstration of proper code use.
              </p>
            </div>
          </IonSlide>

          <IonSlide>
            <img alt="an elephant" src="/assets/undraw/undraw_walking_outside_5ueb.svg" />
            <h2>What is Ionic?</h2>
            <p>
              <IonText color="primary"> Ionic Framework</IonText>
              {' '}
              is an open source SDK that enables developers to build high quality mobile apps with
              web technologies like HTML, CSS, and JavaScript.
            </p>
          </IonSlide>

          <IonSlide>
            <img alt="an elephant" src="/assets/undraw/undraw_Relaxing_at_home_re_mror.svg" />
            <h2>What is Ionic Appflow?</h2>
            <p>
              <IonText color="primary"> Ionic AppFlow</IonText>
              {' '}
              is a powerful set of services and features built on top of Ionic Framework that brings
              a totally new level of app development agility to mobile dev teams.
            </p>
          </IonSlide>

          <IonSlide>
            <img alt="an elephant" src="/assets/undraw/undraw_walking_outside_5ueb.svg" />
            <h2>Ready to Play?</h2>
            <IonButton fill="clear" onClick={() => register()}>
              Continue
              <IonIcon slot="end" icon="arrow-forward" />
            </IonButton>
          </IonSlide>

        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Register;
