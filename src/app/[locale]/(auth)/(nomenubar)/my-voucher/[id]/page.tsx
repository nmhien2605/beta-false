import MyVoucherDetailPage from '@/featrues/my-voucher/Detail';
import React from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  return <MyVoucherDetailPage id={params.id} />;
};

export default Page;
