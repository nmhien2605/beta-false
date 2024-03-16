import { useMutation } from '@tanstack/react-query';
import { API } from '@/api/endpoints';

export const useCreateCampaign = () => {
  const { mutateAsync, ...rest } = useMutation({
    mutationKey: ['createCampaign'],
    mutationFn: async ({ marchant, payload }: { marchant: string; payload: ICampaignCreate }) => {
      const { message } = await API.createCampaign(marchant, payload);
      return message;
    },
  });

  return {
    mutateAsync,
    rest,
  };
};
