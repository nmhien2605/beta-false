'use client';

import React, { useMemo } from 'react';
import Image from '@/components/ui/Image';
import { Button, Card, Divider } from '@nextui-org/react';
import { useListCampaign } from '@/hooks/campaign/useList';
import { useCreateVoucher } from '@/hooks/voucher/useCreate';
import { useWalletData } from '@/stores/walletData';
import { useGetIDx } from '@/hooks/sign/useCampaignIDx';

const VoucherDetailPage = ({ id }: { id: string }) => {
  const { address } = useWalletData();
  const { data: list } = useListCampaign();
  const { mutateAsync: getIDx } = useGetIDx();
  const { mutateAsync: create } = useCreateVoucher();

  const detail = useMemo(() => {
    if (!list) return;
    return list?.find((item) => `${item.id}` === id);
  }, [id, list]);

  const handleCreate = async () => {
    if (!detail) return;
    const id = await getIDx(detail.id);
    try {
      // @ts-ignore
      await window.mina
        ?.signMessage({ message: `${id} - ${detail.campaignAddrees}` })
        .catch((err: any) => err);
    } catch (error) {}
    create({
      campaignId: detail.id,
      payload: { onchainId: detail.offchainData.id, owner: address, ownerWitness: address },
    });
  };

  if (!detail) return <div>Loading...</div>;

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-5xl flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* <div className="aspect-video w-full rounded-2xl bg-slate-100"> */}
          <Image
            src={detail?.offchainData.image}
            alt=""
            fit="cover"
            className="aspect-video w-full rounded-2xl bg-slate-100 [&>img]:!rounded-2xl"
          />
          {/* </div> */}
          <div className="flex w-full flex-col gap-4">
            <div className="text-xl font-semibold">{detail?.offchainData.name}</div>
            <div className="">{detail?.offchainData.description}</div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">Price:</div>
              <div className="flex gap-2">
                {/* {detail?.cost.map((item) => ( */}
                <Button disabled className="bg-slate-50">
                  {detail?.offchainData.cost} LOY
                </Button>
                {/* ))} */}
              </div>
            </div>
            <Button color="primary" radius="full" className="w-fit px-12" onClick={handleCreate}>
              Purchase
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="rounded-2xl bg-slate-100 md:basis-2/3">
            <Card className=" flex h-full flex-col gap-4 p-4">
              <div className=" text-xl font-semibold">Information</div>
              <Divider />
              <div>{detail?.offchainData.description}</div>
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

export default VoucherDetailPage;
