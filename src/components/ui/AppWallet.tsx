'use client';

import {
  Button,
  Divider,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  User,
} from '@nextui-org/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from './Image';

import defaultAavatar from '@/assets/images/avatarDefault.png';
import { useWalletData } from '@/stores/walletData';
import { Copy } from '@/assets/icons';

const AppWallet = () => {
  const { address, network, setAddress, setNetwork } = useWalletData();
  console.log(address, network);
  const [installed, setInstalled] = useState<boolean>(false);
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);

  const checkWallet = async () => {
    // @ts-ignore
    if (typeof window.mina !== 'undefined') {
      setInstalled(true);
      // @ts-ignore
      const accounts = await window.mina?.getAccounts();
      // @ts-ignore
      const network = await window.mina?.requestNetwork();
      if (accounts && accounts.length > 0) {
        setNetwork(network);
        setAddress(accounts[0]);
      }
    }
  };

  const connectWallet = async () => {
    try {
      // @ts-ignore
      const accounts = await window.mina.requestAccounts();
      if (accounts.length && accounts.length > 0) {
        setAddress(accounts[0]);
      }
    } catch (error) {}
  };

  useEffect(() => {
    // @ts-ignore
    checkWallet();
  }, []);

  return (
    <div>
      {installed ? (
        <>
          {address ? (
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <Button color="primary">
                  <div className="flex items-center gap-2 py-1">
                    <div className="h-5 w-5 rounded-full">
                      <Image src={defaultAavatar} alt="daufault-avatar" fit="cover" />
                    </div>
                    <div>
                      {address.length && address.length > 9
                        ? `${address.slice(0, 5)}...${address.slice(-3)}`
                        : address}
                    </div>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-1">
                <div className="min-w-40">
                  <div className="p-3">
                    <div>{network.name}</div>
                    <div className="flex items-center justify-between">
                      {address.length && address.length > 9
                        ? `${address.slice(0, 5)}...${address.slice(-3)}`
                        : address}
                      <Tooltip content={copiedAddress ? 'Copied' : 'Copy'} placement="bottom">
                        <div
                          className="cursor-pointer rounded-lg p-1 hover:bg-slate-50"
                          onClick={() => {
                            navigator.clipboard.writeText(address);
                            setCopiedAddress(true);
                            setTimeout(() => setCopiedAddress(false), 3000);
                          }}
                        >
                          <Copy height={16} width={16} />
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                  <Divider />
                  <Listbox aria-label="Actions">
                    <ListboxItem key="new">
                      <Link href="/profile">My vouchers</Link>
                    </ListboxItem>
                    <ListboxItem key="delete" className="text-danger" color="danger">
                      Log out
                    </ListboxItem>
                  </Listbox>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Button color="primary" onClick={connectWallet} className="min-w-32">
              Connect Wallet
            </Button>
          )}
        </>
      ) : (
        <Link href="https://aurowallet.com/">
          <Button className="min-w-32">Install Wallet</Button>
        </Link>
      )}
    </div>
  );
};

export default AppWallet;
