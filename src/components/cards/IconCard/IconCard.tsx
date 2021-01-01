import React, { createRef, useState } from 'react';
import './IconCard.scss';
import { IonButton, IonIcon, IonText } from '@ionic/react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

interface ContainerProps {
  icon: string;
  subtitle: string;
  // TODO Remove eslint-suppress
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

// eslint-disable-next-line react/prop-types
const IconCard: React.FC<ContainerProps> = ({ icon, subtitle, onClick }: ContainerProps) => {
  const [isActive, setActive] = useState(false);
  const ref = createRef<HTMLDivElement>();
  useOnClickOutside(ref as React.MutableRefObject<HTMLElement>, () => setActive(false));

  return (
    <div ref={ref} className={`ion-align-items-center icon-card ${isActive ? 'is-active' : ''}`}>
      <IonButton color={isActive ? 'dark' : 'light'} onClick={() => { setActive(!isActive); if (onClick) { onClick(); } }}>
        <IonIcon slot="icon-only" icon={icon} />
      </IonButton>
      <IonText className={`subtitle ${(isActive) ? 'font-bold' : ''}`}>{subtitle}</IonText>
    </div>
  );
};

export default IconCard;
