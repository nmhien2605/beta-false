import { useMutation } from '@tanstack/react-query';
import { API } from '@/api/endpoints';
import { LocalStorage } from '@/utils/newLocalStorage';

export const useSignup = () => {
  const { mutateAsync, ...rest } = useMutation({
    mutationKey: ['signup'],
    mutationFn: async (payload: ISignUpPayload) => {
      const { data } = await API.signup(payload);
      LocalStorage.set('csrfToken', data?.csrfToken);
      return data;
    },
  });

  return {
    mutateAsync,
    rest,
  };
};
