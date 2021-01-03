import React, { useEffect } from 'react';
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import {
  keypadOutline,
  logoAngular,
  logoChrome,
  logoFacebook,
  logoGithub,
  logoIonic,
  logoJavascript,
  logoNpm,
  logoPwa,
  logoReact,
  logoTwitter,
  logoVimeo,
  logoYoutube,
  musicalNoteOutline,
  personOutline,
} from 'ionicons/icons';
import useApp from '../hooks/useApp';
import useModal from '../hooks/useModal';
import useAuth from '../hooks/useAuth';
import ModalReconnect from '../components/modals/ModalReconnect/ModalReconnect';

interface ContainerProps {
  children: any;
}

const MainLayout: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  const { setUser } = useApp();
  const { openSpotify, openModal } = useModal();
  const { getAccount } = useAuth();
  useEffect(() => {
    const token = localStorage.getItem('OW_ACCESS_TOKEN');
    if (token) {
      getAccount(token).then((getAccountResult: any) => {
        if (getAccountResult.code) {
          openModal(ModalReconnect, { lines: 'one-line', isClosable: false, mode: 'ios' });
        } else {
          setUser(getAccountResult);
          if (!getAccountResult.spotify) {
            openSpotify();
          }
        }
      });
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div className="main-layout">
      <IonFab vertical="center" horizontal="end" className="slide-in-left" slot="fixed">
        <IonFabButton>Share</IonFabButton>
        <IonFabList side="top">
          <IonFabButton>
            <IonIcon icon={logoFacebook} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoTwitter} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoYoutube} />
          </IonFabButton>
        </IonFabList>

        <IonFabList side="end">
          <IonFabButton>
            <IonIcon icon={logoPwa} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoNpm} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoIonic} />
          </IonFabButton>
        </IonFabList>

        <IonFabList side="bottom">
          <IonFabButton>
            <IonIcon icon={logoGithub} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoJavascript} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoAngular} />
          </IonFabButton>
        </IonFabList>

        <IonFabList side="start">
          <IonFabButton>
            <IonIcon icon={logoVimeo} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoChrome} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoReact} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
      <IonTabs>
        <IonRouterOutlet>
          {children}
        </IonRouterOutlet>
        <IonTabBar color="light-red" slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={musicalNoteOutline} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={keypadOutline} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={personOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </div>
  );
};

export default MainLayout;
