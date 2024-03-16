'use client';

import * as React from 'react';
// import { RainbowKitProvider, getDefaultWallets, getDefaultConfig } from '@rainbow-me/rainbowkit';
// import { argentWallet, trustWallet, ledgerWallet } from '@rainbow-me/rainbowkit/wallets';
// import { arbitrum, base, mainnet, optimism, polygon, sepolia, zora } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { WagmiProvider } from 'wagmi';
import { NextUIProvider } from '@nextui-org/react';
import { Locale } from '@/i18n.config';
import { setLanguage } from '@/dictionary';
import '@rainbow-me/rainbowkit/styles.css';
import { useWalletData } from '@/stores/walletData';

// const { wallets } = getDefaultWallets();

// const config = getDefaultConfig({
//   appName: 'BetaLoyal',
//   projectId: process.env.NEXT_PUBLIC_WAGMI_PROJECT_ID || '',
//   wallets: [
//     ...wallets,
//     {
//       groupName: 'Other',
//       wallets: [argentWallet, trustWallet, ledgerWallet],
//     },
//   ],
//   chains: [
//     mainnet,
//     polygon,
//     optimism,
//     arbitrum,
//     base,
//     zora,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
//   ],
//   ssr: true,
// });

const RootProvider = ({ children, locale }: IChildren & { locale: Locale }) => {
  const { setNetwork, setAddress } = useWalletData();
  const queryClient = new QueryClient();

  // @ts-ignore
  window.mina?.on('accountsChanged', (accounts: string[]) => {
    setAddress(accounts[0]);
  });
  // @ts-ignore
  window.mina?.on('chainChanged', (chainInfo: INetwork) => {
    setNetwork(chainInfo);
  });

  setLanguage(locale);

  return (
    // <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        {/* <RainbowKitProvider> */}
        {children}
        {/* </RainbowKitProvider> */}
      </NextUIProvider>
    </QueryClientProvider>
    // </WagmiProvider>
  );
};

export default RootProvider;
