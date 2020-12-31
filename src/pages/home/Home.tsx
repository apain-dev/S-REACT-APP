import React from 'react';
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonModal,
  IonNote,
  IonPage,
  IonSearchbar,
  IonText,
  IonToolbar,
} from '@ionic/react';
import './Home.css';
import {
  archive,
  arrowForwardOutline,
  ellipsisHorizontal,
  ellipsisVertical,
  heart,
  heartOutline,
  laptopOutline,
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
  pin,
  rocketOutline,
  star,
  trash,
  walk,
  warning,
  watchOutline,
  wifi,
  wine,
} from 'ionicons/icons';
import IconCard from '../../components/cards/IconCard/IconCard';

const Home: React.FC = () => (
  <IonPage>
    <IonContent class="ion-padding" fullscreen>
      <IonLoading
        spinner="bubbles"
        cssClass="my-custom-class"
        isOpen
        message="Please wait..."
        duration={5000}
      />
      <IonFab vertical="center" horizontal="end" slot="fixed">
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
      <IonHeader className="ion-no-border">
        <IonToolbar color="secondary">
          <div slot="start">
            <div>
              <h5><IonText color="light">Good morning,</IonText></h5>
              <h1 className="ion-no-margin font-bold"><IonText color="danger">Sophia</IonText></h1>
            </div>
          </div>

          <IonAvatar slot="primary">
            <img alt="Your avatar" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonToolbar className="py-3">
        <IonSearchbar mode="ios" className="ion-no-padding" placeholder="Search Favorites" />
      </IonToolbar>
      <section className="ion-justify-content-between d-flex">
        <IconCard subtitle="Favoris" icon={heartOutline} />
        <IconCard subtitle="Populaire" icon={rocketOutline} />
        <IconCard subtitle="Aujourd'hui" icon={laptopOutline} />
        <IconCard subtitle="Récent" icon={watchOutline} />
      </section>
      <section>
        <IonListHeader className="ion-no-padding">
          <IonLabel>Recommended</IonLabel>
          <IonButton color="danger" fill="outline">
            <IonIcon slot="icon-only" icon={arrowForwardOutline} />
          </IonButton>
        </IonListHeader>

        <IonCard color="primary" className="ion-no-margin ion-margin-top">
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
          </IonCardContent>
        </IonCard>

        <IonCard className="ion-no-margin ion-margin-top">
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
      </section>
      <section>
        <IonList>
          {/* Sliding item with text options on both sides */}
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption>Favorite</IonItemOption>
              <IonItemOption>Share</IonItemOption>
            </IonItemOptions>

            <IonItem>
              <IonLabel>Item Options</IonLabel>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {/* Sliding item with expandable options on both sides */}
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="danger" expandable>
                Delete
              </IonItemOption>
            </IonItemOptions>

            <IonItem>
              <IonLabel>Expandable Options</IonLabel>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption color="tertiary" expandable>
                Archive
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {/* Multi-line sliding item with icon options on both sides */}
          <IonItemSliding id="item100">
            <IonItem href="#">
              <IonLabel>
                <h2>HubStruck Notifications</h2>
                <p>A new message in your network</p>
                <p>Oceanic Next has joined your network</p>
              </IonLabel>
              <IonNote slot="end">
                10:45 AM
              </IonNote>
            </IonItem>

            <IonItemOptions side="start">
              <IonItemOption>
                <IonIcon slot="icon-only" icon={heart} />
              </IonItemOption>
            </IonItemOptions>

            <IonItemOptions side="end">
              <IonItemOption color="danger">
                <IonIcon slot="icon-only" icon={trash} />
              </IonItemOption>
              <IonItemOption>
                <IonIcon slot="icon-only" icon={star} />
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {/* Sliding item with icon start options on end side */}
          <IonItemSliding>
            <IonItem>
              <IonLabel>
                Sliding Item, Icons Start
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption color="primary">
                <IonIcon slot="start" ios={ellipsisHorizontal} md={ellipsisVertical} />
                More
              </IonItemOption>
              <IonItemOption color="secondary">
                <IonIcon slot="start" icon={archive} />
                Archive
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {/* Sliding item with icon end options on end side */}
          <IonItemSliding>
            <IonItem>
              <IonLabel>
                Sliding Item, Icons End
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption color="primary">
                <IonIcon slot="end" ios={ellipsisHorizontal} md={ellipsisVertical} />
                More
              </IonItemOption>
              <IonItemOption color="secondary">
                <IonIcon slot="end" icon={archive} />
                Archive
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {/* Sliding item with icon top options on end side */}
          <IonItemSliding>
            <IonItem>
              <IonLabel>
                Sliding Item, Icons Top
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption color="primary">
                <IonIcon slot="top" ios={ellipsisHorizontal} md={ellipsisVertical} />
                More
              </IonItemOption>
              <IonItemOption color="secondary">
                <IonIcon slot="top" icon={archive} />
                Archive
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {/* Sliding item with icon bottom options on end side */}
          <IonItemSliding>
            <IonItem>
              <IonLabel>
                Sliding Item, Icons Bottom
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption color="primary">
                <IonIcon slot="bottom" ios={ellipsisHorizontal} md={ellipsisVertical} />
                More
              </IonItemOption>
              <IonItemOption color="secondary">
                <IonIcon slot="bottom" icon={archive} />
                Archive
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </section>
    </IonContent>
  </IonPage>
);

export default Home;
