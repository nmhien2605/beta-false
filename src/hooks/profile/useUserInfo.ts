import { useQuery } from '@tanstack/react-query';
import { API } from '@/api/endpoints';

export const useUserInfo = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const { data }: { data: IUserInfo } = await API.userInfo();
      return data;
    },
  });

  return {
    data: data,
    ...rest,
  };
};
