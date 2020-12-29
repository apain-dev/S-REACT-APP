import React from 'react';
import './Card.css';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonGrid,
    IonIcon,
    IonItem,
    IonLabel, IonList, IonRow, IonThumbnail, IonAvatar, IonProgressBar,
} from '@ionic/react';
import {pin, play, playBack, playForward, repeat, shuffle, walk, warning, wifi, wine} from 'ionicons/icons';

interface ContainerProps {
}

const Card: React.FC<ContainerProps> = () => {
    return (
        <div className="debug">
            <IonCard className="action-card">
                <img className="header-img" src="/assets/card-top-img.png"/>
                <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    Here's a small text description for the card content. Nothing more, nothing less.
                    <IonGrid>
                        <IonRow>
                            <IonGrid>
                                <IonButton size="small">Action</IonButton>
                            </IonGrid>
                            <IonGrid>
                                <IonButton fill="clear">
                                    <IonIcon slot="icon-only" ios="heart" md="heart-sharp"></IonIcon>
                                </IonButton>
                                <IonButton fill="clear">
                                    <IonIcon slot="icon-only" ios="share" md="share-sharp"></IonIcon>
                                </IonButton>
                            </IonGrid>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>

            <IonCard className="apps-card">
                <IonCardHeader>
                    <IonCardSubtitle>Your Daily List</IonCardSubtitle>
                    <IonCardTitle>Ionic Apps We Think You'll Love.</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonList>
                        <IonItem>
                            <IonThumbnail slot="start">
                                <img src="/assets/logo-sworkit.png"/>
                            </IonThumbnail>
                            <IonLabel>
                                <h3>Sworkit</h3>
                                <p>The number one fitness app</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonThumbnail slot="start">
                                <img src="/assets/logo-untappd.png"/>
                            </IonThumbnail>
                            <IonLabel>
                                <h3>Untappd</h3>
                                <p>Discover and share beer</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonThumbnail slot="start">
                                <img src="/assets/logo-shipt.png"/>
                            </IonThumbnail>
                            <IonLabel>
                                <h3>Shipt</h3>
                                <p>Bring the store to your door</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonThumbnail slot="start">
                                <img src="/assets/logo-amtrak.png"/>
                            </IonThumbnail>
                            <IonLabel>
                                <h3>Amtrak</h3>
                                <p>Book a trip today</p>
                            </IonLabel>
                        </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>

            <IonCard className="coworker-card">
                <img src="/assets/card-coworker-header.png" className="header-img"/>
                <IonCardContent>
                    <IonList lines="none">
                        <IonItem>
                            <IonAvatar slot="start">
                                <img src="/assets/card-coworker-avatar.png"/>
                            </IonAvatar>
                            <IonLabel>
                                <h1>John Parks</h1>
                                <p>Co-worker</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon name="call" slot="start"></IonIcon>
                            <IonLabel>
                                <h2>(555) 418-5602</h2>
                                <p>Mobile phone</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon name="mail" slot="start"></IonIcon>
                            <IonLabel>
                                <h2>jparks@workmail.com</h2>
                                <p>Work email</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon name="mail" slot="start"></IonIcon>
                            <IonLabel>
                                <h2>john.parks92@email.com</h2>
                                <p>Personal email</p>
                            </IonLabel>
                        </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>

            <IonCard className="music-card">
                <IonCardHeader>
                    <img src="/assets/card-album.png"/>
                </IonCardHeader>
                <IonCardContent text-center>
                    <h2>29 #Strafford APTS</h2>
                    <p>Bon Iver — 22, A Million</p>

                    <IonProgressBar value={.25}></IonProgressBar>

                    <IonButton color="dark" fill="clear" size="small">
                        <IonIcon slot="icon-only" icon={shuffle}></IonIcon>
                    </IonButton>
                    <IonButton color="dark" fill="clear" size="large">
                        <IonIcon slot="icon-only" icon={playBack}></IonIcon>
                    </IonButton>
                    <IonButton color="dark" fill="clear" className="button-largest">
                        <IonIcon slot="icon-only" icon={play}></IonIcon>
                    </IonButton>
                    <IonButton color="dark" fill="clear" size="large">
                        <IonIcon slot="icon-only" icon={playForward}></IonIcon>
                    </IonButton>
                    <IonButton color="dark" fill="clear" size="small">
                        <IonIcon slot="icon-only" icon={repeat}></IonIcon>
                    </IonButton>
                </IonCardContent>
            </IonCard>

            <IonCard>
                <img src="/assets/madison.jpg"/>
                <IonCardHeader>
                    <IonCardSubtitle>Destination</IonCardSubtitle>
                    <IonCardTitle>Madison, WI</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of
                    the Wisconsin Territory in 1836.
                </IonCardContent>
            </IonCard>
        </div>
    );
};

export default Card;
