import { useMutation } from '@tanstack/react-query';
import { API } from '@/api/endpoints';

export const useGetIDx = () => {
  const { mutateAsync, ...rest } = useMutation({
    mutationKey: ['getIDx'],
    mutationFn: async (campaignId: number) => {
      const { message } = await API.getIDx(campaignId);
      return message;
    },
  });

  return {
    mutateAsync,
    ...rest,
  };
};
