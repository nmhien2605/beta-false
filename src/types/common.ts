interface IChildren {
  children: React.ReactNode;
}

interface IResponseData {
  data: any;
  message: string;
}

interface ISignUpPayload {
  email: string;
  password: string;
}

interface IUserInfo {
  id: string;
  isActive: boolean;
  displayName: string;
  email: string;
  isVerifiedEmail: boolean;
  newEmail: string;
  multiFactorType: string;
  multiFactorExpiresAt: string;
  DeletedAt: boolean;
  SocialAccounts: boolean;
  salt: string;
}

interface INetwork {
  chainId: string;
  name: string;
}

interface IWalletData {
  network: INetwork;
  address: string;
  setNetwork: (network: INetwork) => void;
  setAddress: (address: string) => void;
  reset: () => void;
}
