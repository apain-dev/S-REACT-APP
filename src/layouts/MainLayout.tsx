import React from 'react';
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import {
  ellipseOutline,
  homeOutline,
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
  squareOutline,
} from 'ionicons/icons';

interface ContainerProps {
  children: any;
}

const MainLayout: React.FC<ContainerProps> = ({ children }: ContainerProps) => (
  <>
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
          <IonIcon icon={homeOutline} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={ellipseOutline} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={squareOutline} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </>
);

export default MainLayout;
