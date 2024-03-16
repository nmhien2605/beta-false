'use client';

import React from 'react';
import { Button, Card, CardBody, CardHeader, Divider, Input } from '@nextui-org/react';
import Image from '@/components/ui/Image';
import TitleBar from '@/components/ui/TitleBar';
import Link from 'next/link';
import { Add, Cart } from '@/assets/icons';
import { useListVoucher } from '@/hooks/voucher/useList';
import { useListCampaign } from '@/hooks/campaign/useList';
import { useWalletData } from '@/stores/walletData';
import cashVoucher from '@/assets/images/cashVoucher.png';

const VoucherPage = () => {
  const { address } = useWalletData();
  const { data: list, isLoading } = useListCampaign();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <TitleBar back="/" title="Vouchers" />
        <div className="flex w-full items-center justify-between gap-4 md:w-fit md:justify-end">
          {/* <Input
            type="text"
            placeholder="Search"
            className="max-w-xs"
            // startContent={
            //   <MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
            // }
          /> */}
          <Link href="/my-voucher">
            <Button color="success">
              <Cart />
              My vouchers
            </Button>
          </Link>
        </div>
      </div>

      <Divider />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list && list?.length > 0
          ? list.map((item) => (
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
          : null}
      </div>
    </div>
  );
};

export default VoucherPage;
