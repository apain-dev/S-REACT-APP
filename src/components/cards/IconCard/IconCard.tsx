import React, { useState } from 'react';
import './IconCard.css';
import { IonButton, IonIcon } from '@ionic/react';

interface ContainerProps {
  icon: string;
}

// eslint-disable-next-line react/prop-types
const IconCard: React.FC<ContainerProps> = ({ icon }: ContainerProps) => {
  const [isActive, setActive] = useState(false);
  return (
    <IonButton color={isActive ? 'dark' : ''} onClick={() => setActive(!isActive)}>
      <IonIcon slot="icon-only" icon={icon} />
    </IonButton>
  );
};

export default IconCard;
