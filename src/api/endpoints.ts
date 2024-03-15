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
};
