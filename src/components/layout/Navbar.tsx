'use client';

import { ChevronDown, Logo } from '@/assets/icons';
import AppWallet from '@/components/ui/AppWallet';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar shouldHideOnScroll className="shadow">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-6 sm:flex" justify="start">
        <NavbarItem className="text-sm">About LOY</NavbarItem>
        <NavbarItem>
          <Button
            disableRipple
            className="bg-transparent p-0 data-[hover=true]:bg-transparent"
            endContent={<ChevronDown size={16} />}
            radius="sm"
            variant="light"
          >
            Products
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            disableRipple
            className="bg-transparent p-0 data-[hover=true]:bg-transparent"
            endContent={<ChevronDown size={16} />}
            radius="sm"
            variant="light"
          >
            Resources
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            disableRipple
            className="bg-transparent p-0 data-[hover=true]:bg-transparent"
            endContent={<ChevronDown size={16} />}
            radius="sm"
            variant="light"
          >
            Gift Catalog
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <AppWallet />
      </NavbarContent>
      <NavbarMenu className="py-4">
        <NavbarMenuItem>
          <Link className="w-full text-sm" href="#">
            About LOY
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="#">
            <Button
              disableRipple
              className="bg-transparent p-0 data-[hover=true]:bg-transparent"
              endContent={<ChevronDown size={16} />}
              radius="sm"
              variant="light"
            >
              Products
            </Button>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="#">
            <Button
              disableRipple
              className="bg-transparent p-0 data-[hover=true]:bg-transparent"
              endContent={<ChevronDown size={16} />}
              radius="sm"
              variant="light"
            >
              Resources
            </Button>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="#">
            <Button
              disableRipple
              className="bg-transparent p-0 data-[hover=true]:bg-transparent"
              endContent={<ChevronDown size={16} />}
              radius="sm"
              variant="light"
            >
              Gift Catalog
            </Button>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavbar;
