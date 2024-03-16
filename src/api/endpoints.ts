import { api } from '@/api/client';

export const API = {
  checkEmailValid: async (payload: { email: string }) => {
    return await api.post<IResponseData>('/auth/is-email-valid', payload);
  },

  signup: async (payload: ISignUpPayload) => {
    return await api.post<IResponseData>('/auth/signup', payload);
  },

  userInfo: async () => {
    return await api.get<IResponseData>('/user/info');
  },

  getCampaigns: async (marchant?: string) => {
    return await api.get<IResponseData>(`/campaign`, marchant ? { marchantAddress: marchant } : {});
  },

  createCampaign: async (marchant: string, payload: ICampaignCreate) => {
    return await api.post<IResponseData>(`/marchant/${marchant}/campaign`, payload);
  },

  getVouchers: async (address: string) => {
    return await api.get<IResponseData>(`/voucher`, address ? { authAddress: address } : {});
  },

  createVoucher: async (campaignId: number, payload: IVoucherCreate) => {
    return await api.post<IResponseData>(`/campaign/${campaignId}/voucher`, payload);
  },

  getIDx: async (campaignId: number) => {
    return await api.get<IResponseData>(`/campaign/${campaignId}/currentIdx`);
  },
};
