'use client';

import React, { useMemo } from 'react';
import Image from '@/components/ui/Image';
// import cashVoucher from '@/assets/images/cashVoucher.png';
import { useListVoucher } from '@/hooks/voucher/useList';
import { Card, Divider } from '@nextui-org/react';
import { useWalletData } from '@/stores/walletData';

const MyVoucherDetailPage = ({ id }: { id: string }) => {
  const { address } = useWalletData();
  const { data: list } = useListVoucher(address);

  const detail: ICampaignVoucher = useMemo(() => {
    if (!list) return;
    return list?.find((item: ICampaignVoucher) => `${item.id}` === id);
  }, [id, list]);

  if (!detail) return <div>Loading...</div>;

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-5xl flex-col gap-8 md:flex-row">
        <div className="basis-1/3 ">
          <Card className="flex flex-col gap-4 rounded-2xl p-2 text-center">
            <div className="aspect-video w-full">
              <Image
                src={detail.campaign.offchainData.image}
                alt=""
                fit="cover"
                className="aspect-video w-full rounded-2xl bg-slate-100 [&>img]:!rounded-xl"
              />
            </div>
            <div className="font-semibold">{detail.campaign.name}</div>
            <div className=" text-xl font-semibold">{detail.campaign.offchainData.name}</div>
            <div className=" text-2xl text-primary-500">
              {detail.campaign.offchainData.cost * 25000} VNĐ
            </div>
          </Card>
        </div>
        <div className="flex basis-2/3 flex-col gap-8">
          <div className="rounded-2xl bg-slate-100 md:basis-2/3">
            <Card className=" flex h-full flex-col gap-4 p-4">
              <div className=" text-xl font-semibold">Information</div>
              <Divider />
              <div>{detail.campaign.offchainData.description}</div>
            </Card>
          </div>
          <div className="md:basis-1/3">
            <Card className="flex  h-full flex-col gap-4 p-4">
              <div>Applicable address</div>
              <div>Store: 20</div>
              <div>
                {[1, 2, 3, 4, 5].map((item) => (
                  <Card key={item} className="rounded-lg bg-slate-50 p-2 shadow">
                    Address {item}
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVoucherDetailPage;
