import { create } from 'zustand';

export const useWalletData = create<IWalletData>((set) => ({
  network: { chainId: '', name: '' },
  address: '',
  setNetwork: (network: INetwork) => {
    set({ network });
  },
  setAddress: (address: string) => {
    set({ address });
  },
  reset: () => set({ network: { chainId: '', name: '' }, address: '' }),
}));
