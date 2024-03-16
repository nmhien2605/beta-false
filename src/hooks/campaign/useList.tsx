import { useQuery } from '@tanstack/react-query';
import { API } from '@/api/endpoints';

// import cashVoucher from '@/assets/images/cashVoucher.png';

// const list = [
//   {
//     id: '1',
//     type: 'cash',
//     name: 'Voucher 1',
//     description:
//       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
//     banner: cashVoucher,
//     price: [100, 200, 300],
//   },
//   {
//     id: '2',
//     type: 'discount',
//     name: 'Voucher 2',
//     description: 'Description 2',
//     banner: cashVoucher,
//     price: [100, 200, 300],
//   },
// ];

export const useListCampaign = (marchant?: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ['listVoucher', marchant],
    queryFn: async () => {
      const { message }: { message: ICampaign[] } = await API.getCampaigns(marchant);
      return message;
    },
  });

  return {
    data: data,
    ...rest,
  };
};
