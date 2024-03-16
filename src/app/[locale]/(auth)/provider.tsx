'use client';

import React, { useEffect } from 'react';
import { useWalletData } from '@/stores/walletData';
import { useRouter } from 'next/navigation';

const AuthProvider = ({ children }: IChildren) => {
  const { address } = useWalletData();
  const router = useRouter();

  useEffect(() => {
    if (!address || !address.length || address.length === 0) router.replace('/');
  }, [address]);

  if (!address || !address.length || address.length === 0) return null;

  return <div className="h-full w-full">{children}</div>;
};

export default AuthProvider;
