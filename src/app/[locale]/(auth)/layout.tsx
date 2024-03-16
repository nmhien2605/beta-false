import LayoutContainer from '@/components/layout/Container';
import React from 'react';

const AuthLayout = ({ children }: IChildren) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default AuthLayout;
