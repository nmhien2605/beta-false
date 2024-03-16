'use client';

import AppWallet from '@/components/ui/AppWallet';
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import React from 'react';

const AppNavbar = () => {
  return (
    <Navbar shouldHideOnScroll className="shadow">
      <NavbarBrand>Logo</NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center"></NavbarContent>
      <NavbarContent justify="end">
        <AppWallet />
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;
