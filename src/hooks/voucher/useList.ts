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

export const useListVoucher = (address: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ['listVoucher', address],
    queryFn: async () => {
      const { message } = await API.getVouchers(address);
      return message;
    },
  });

  return {
    data: data,
    ...rest,
  };
};
