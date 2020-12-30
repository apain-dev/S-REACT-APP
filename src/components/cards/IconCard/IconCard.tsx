import React, { useState } from 'react';
import './IconCard.css';
import { IonButton, IonIcon, IonText } from '@ionic/react';

interface ContainerProps {
  icon: string;
  subtitle: string;
}

// eslint-disable-next-line react/prop-types
const IconCard: React.FC<ContainerProps> = ({ icon, subtitle }: ContainerProps) => {
  const [isActive, setActive] = useState(false);
  return (
    <div className={`ion-align-items-center icon-card ${isActive ? 'is-active' : ''}`}>
      <IonButton color={isActive ? 'dark' : 'primary'} onClick={() => setActive(!isActive)}>
        <IonIcon slot="icon-only" icon={icon} />
      </IonButton>
      <IonText color={isActive ? 'dark' : 'light'} className="subtitle">{subtitle}</IonText>
    </div>
  );
};

export default IconCard;
