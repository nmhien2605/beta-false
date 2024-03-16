import { useMutation } from '@tanstack/react-query';
import { API } from '@/api/endpoints';

export const useCreateVoucher = () => {
  const { mutateAsync, ...rest } = useMutation({
    mutationKey: ['createVoucher'],
    mutationFn: async ({
      campaignId,
      payload,
    }: {
      campaignId: number;
      payload: IVoucherCreate;
    }) => {
      const { message } = await API.createVoucher(campaignId, payload);
      return message;
    },
  });

  return {
    mutateAsync,
    rest,
  };
};
