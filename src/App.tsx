import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonLabel,
  IonLoading, IonModal,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  ellipseOutline,
  homeOutline, logoAngular, logoChrome,
  logoFacebook, logoGithub, logoIonic, logoJavascript, logoNpm,
  logoPwa, logoReact,
  logoTwitter, logoVimeo,
  logoYoutube,
  squareOutline,
} from 'ionicons/icons';
import Home from './pages/home/Home';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

import './theme/main.scss';

const App: React.FC = () => (
  <IonApp className="outworld">
    <IonLoading
      spinner="bubbles"
      cssClass="my-custom-class"
      isOpen
      message="Please wait..."
      duration={5000}
    />
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
    <IonModal isOpen cssClass="my-custom-class">
      <p>This is modal content</p>
    </IonModal>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />
          <Route path="/tab2" component={Tab2} exact />
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/home" />} exact />
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
    </IonReactRouter>
  </IonApp>
);

export default App;
