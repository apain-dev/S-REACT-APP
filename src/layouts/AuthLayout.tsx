import React from 'react';
import './AuthLayout.scss';

interface ContainerProps {
  children: any;
}

const AuthLayout: React.FC<ContainerProps> = ({ children } : ContainerProps) => (
  <div className="auth-layout">
    {children}
  </div>
);

export default AuthLayout;
