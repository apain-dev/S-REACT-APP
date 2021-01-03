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
import PlaylistID from './pages/playlistID/PlaylistID';
import ModalProvider from './contexts/ModalProvider';
import AppProvider from './contexts/AppProvider';
import useApp from './hooks/useApp';
import Login from './pages/login/Login';

const App: React.FC = () => {
  const { user } = useApp();
  return (
    <IonApp className="outworld">
      <AppProvider>
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
              <Route path="/" render={() => <Redirect to="/home" />} exact />
              <Route path="/register">
                <AuthLayout>
                  <Register />
                </AuthLayout>
              </Route>
              <Route path="/login">
                <AuthLayout>
                  <Login />
                </AuthLayout>
              </Route>
              <Route
                path=""
              >
                {
                  user === undefined ? (<Redirect to="/register" />) : null
                }
                <MainLayout>
                  <Route path="/home" component={Home} exact />
                  <Route path="/tab2" component={Tab2} exact />
                  <Route path="/tab3" component={Tab3} />
                </MainLayout>
                <Route path="/playlists/:id">
                  <AuthLayout>
                    <PlaylistID />
                  </AuthLayout>
                </Route>
              </Route>
            </IonRouterOutlet>

          </IonReactRouter>
        </ModalProvider>
      </AppProvider>
    </IonApp>
  );
};

export default App;
