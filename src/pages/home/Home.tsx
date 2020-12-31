import React from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
  IonPage,
  IonSearchbar,
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
import UserToolbar from '../../components/userToolbar/UserToolbar';

const Home: React.FC = () => (
  <IonPage className="fade-in">
    <IonContent class="ion-padding" fullscreen>
      <UserToolbar />
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
          <IonButton color="primary" fill="outline">
            <IonIcon slot="icon-only" icon={arrowForwardOutline} />
          </IonButton>
        </IonListHeader>

        <IonCard className="ion-no-margin ion-margin-top">
          <IonItem lines="none">
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
        <IonCard className="ion-no-margin ion-margin-top">
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
                <IonItemOption color="primary" expandable>
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
                <IonItemOption color="primary">
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
        </IonCard>
      </section>
    </IonContent>
  </IonPage>
);

export default Home;
