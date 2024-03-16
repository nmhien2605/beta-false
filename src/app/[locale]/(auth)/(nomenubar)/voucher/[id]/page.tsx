import React from 'react';
import VoucherDetailPage from '@/featrues/voucher/Detail';

const Page = ({ params }: { params: { id: string } }) => {
  return <VoucherDetailPage id={params.id} />;
};

export default Page;
