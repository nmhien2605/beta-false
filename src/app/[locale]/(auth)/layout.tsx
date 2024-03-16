import MenuBar from '@/components/layout/MenuBar';
import React from 'react';
// import AuthProvider from './provider';

const AuthLayout = ({ children }: IChildren) => {
  return (
    <div className="flex h-full w-full gap-8">
      <MenuBar />
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default AuthLayout;
