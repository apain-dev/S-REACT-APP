import React, { createRef, useState } from 'react';
import './IconCard.scss';
import { IonButton, IonIcon, IonText } from '@ionic/react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

interface ContainerProps {
  icon: string;
  subtitle: string;
}

// eslint-disable-next-line react/prop-types
const IconCard: React.FC<ContainerProps> = ({ icon, subtitle }: ContainerProps) => {
  const [isActive, setActive] = useState(false);
  const ref = createRef<HTMLDivElement>();
  useOnClickOutside(ref as React.MutableRefObject<HTMLElement>, () => setActive(false));

  return (
    <div ref={ref} className={`ion-align-items-center icon-card ${isActive ? 'is-active' : ''}`}>
      <IonButton color={isActive ? 'dark' : 'light'} onClick={() => setActive(!isActive)}>
        <IonIcon slot="icon-only" icon={icon} />
      </IonButton>
      <IonText className={`subtitle ${(isActive) ? 'font-bold' : ''}`}>{subtitle}</IonText>
    </div>
  );
};

export default IconCard;
