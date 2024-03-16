'use client';

import React from 'react';
import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import Image from '@/components/ui/Image';
import TitleBar from '@/components/ui/TitleBar';
import Link from 'next/link';
import { Add } from '@/assets/icons';
import { useListCampaign } from '@/hooks/campaign/useList';
import { useWalletData } from '@/stores/walletData';

// const list = [
//   {
//     id: 1,
//     type: 'cash',
//     name: 'vouchers 1',
//     banner: 'https://nextui.org/images/hero-card-complete.jpeg',
//   },
//   {
//     id: 2,
//     type: 'discount',
//     name: 'vouchers 2',
//     banner: 'https://nextui.org/images/hero-card-complete.jpeg',
//   },
// ];

const CampaignPage = () => {
  const { address } = useWalletData();
  const { data: list } = useListCampaign(address);

  if (!address || address.length === 0) return <div>Please connect wallet</div>;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <TitleBar back="/dashboard" title="Your Campaign" />
        <div className="flex w-full items-center justify-between gap-4 md:w-fit md:justify-end">
          {/* <Input
            type="text"
            placeholder="Search"
            className="max-w-xs"
            // startContent={
            //   <MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
            // }
          /> */}
          <Link href="/campaign/add">
            <Button color="success">
              <Add />
              Add campaign
            </Button>
          </Link>
        </div>
      </div>

      <Divider />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list && list?.length > 0 ? (
          list.map((item) => (
            <Link key={item.id} href={`/voucher/${item.id}`}>
              <Card isHoverable>
                <CardHeader className="flex-col items-start">
                  {/* <p className="text-tiny font-bold uppercase">Daily Mix</p> */}
                  <small className="text-default-500">{item.name}</small>
                  <h4 className="text-large font-bold">{item.offchainData.name}</h4>
                  <div className="text-default-500">{item.offchainData.description}</div>
                </CardHeader>
                <CardBody className="overflow-visible">
                  <Image
                    alt="Card background"
                    className="rounded-xl object-cover"
                    src={item.offchainData.image}
                  />
                </CardBody>
              </Card>
            </Link>
          ))
        ) : (
          <div>No campaign</div>
        )}
      </div>
    </div>
  );
};

export default CampaignPage;
