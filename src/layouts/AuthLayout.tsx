import React from 'react';
import './AuthLayout.scss';

interface ContainerProps {
  children: any;
}

const AuthLayout: React.FC<ContainerProps> = ({ children } : ContainerProps) => (
  <>
    {children}
  </>
);

export default AuthLayout;
