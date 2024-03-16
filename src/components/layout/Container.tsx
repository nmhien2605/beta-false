import React from 'react';
import AppNavbar from './Navbar';
import Sidebar from './Sidebar';

const LayoutContainer = ({ children }: IChildren) => {
  return (
    <div className="h-full w-full">
      <AppNavbar />
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default LayoutContainer;
