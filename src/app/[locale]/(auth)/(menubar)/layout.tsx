import MenuBar from '@/components/layout/MenuBar';
import React from 'react';
// import AuthProvider from './provider';

const AuthLayout = ({ children }: IChildren) => {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex h-full w-full max-w-5xl gap-8">
        <MenuBar />
        <div className="h-full w-full">
          <div className="rounded-2xl bg-white p-4 shadow">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
