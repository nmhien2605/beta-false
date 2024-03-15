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
