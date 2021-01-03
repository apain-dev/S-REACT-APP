import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
    name: string;
    children: any;
}

const ExploreContainer: React.FC<ContainerProps> = (
  { name, children }: { name: string, children: any },
) => (
  <div className="container">
    <p><strong>{name}</strong></p>
    {children}
  </div>
);

export default ExploreContainer;
