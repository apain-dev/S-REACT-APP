import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonLoading, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home/Home';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

import './theme/main.scss';
import Register from './pages/register/Register';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import ModalHandler from './components/ModalHandler/ModalHandler';
import ModalProvider from './components/ModalHandler/ModalProvider';

const App: React.FC = () => (
  <IonApp className="outworld">
    <ModalProvider>
      <IonLoading
        spinner="bubbles"
        cssClass="my-custom-class"
        isOpen
        message="Please wait..."
        duration={1000}
      />
      <ModalHandler />
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" render={() => <Redirect to="/register" />} exact />
          <Route path="/register">
            <AuthLayout>
              <Register />
            </AuthLayout>
          </Route>
          <Route path="">
            <MainLayout>
              <Route path="/home" component={Home} exact />
              <Route path="/tab2" component={Tab2} exact />
              <Route path="/tab3" component={Tab3} />
            </MainLayout>
          </Route>
        </IonRouterOutlet>

      </IonReactRouter>
    </ModalProvider>
  </IonApp>
);

export default App;
