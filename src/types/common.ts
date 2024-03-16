interface IChildren {
  children: React.ReactNode;
}

interface IResponseData {
  // data: any;
  message: any;
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

interface ICampaignCreate {
  name: string;
  cost: string;
  totalSupply: number;
  voucherOffchainData: {
    name: string;
    description: string;
    image: string;
    cost: number;
  };
}

interface ICampaign {
  id: number;
  name: string;
  marchantAddress: string;
  totalSupply: number;
  cost: number;
  startDate: string;
  endDate: string;
  offchainDataId: number;
  campaignAddrees: string;
  offchainData: {
    id: number;
    name: string;
    description: string;
    image: string;
    cost: number;
  };
}

interface IVoucher {
  id: number;
  onchainId: string;
  owner: string;
  ownerWitness: string;
  uri: string;
  campaignId: number;
  isUsed: boolean;
}

interface ICampaignVoucher extends IVoucher {
  campaign: ICampaign;
}

interface IVoucherCreate {
  onchainId: number;
  owner: string;
  ownerWitness: string;
}
