import React from 'react';
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import Image from '@/components/ui/Image';
import TitleBar from '@/components/ui/TitleBar';
import Link from 'next/link';
import { Add } from '@/assets/icons';

const list = [
  {
    id: 1,
    type: 'cash',
    name: 'vouchers 1',
    banner: 'https://nextui.org/images/hero-card-complete.jpeg',
  },
  {
    id: 2,
    type: 'discount',
    name: 'vouchers 2',
    banner: 'https://nextui.org/images/hero-card-complete.jpeg',
  },
];

const CampaignPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <TitleBar back="/dashboard" title="Your Campaign" />
        <div className="flex w-full items-center justify-between gap-4 md:w-fit md:justify-end">
          <Input
            type="text"
            placeholder="Search"
            className="max-w-xs"
            // startContent={
            //   <MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
            // }
          />
          <Link href="/campaign/add">
            <Button color="success">
              <Add />
              Add campaign
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((item) => (
          <div key={item.id}>
            <Card>
              <CardHeader className="flex-col items-start">
                {/* <p className="text-tiny font-bold uppercase">Daily Mix</p> */}
                <small className="text-default-500">{item.type}</small>
                <h4 className="text-large font-bold">{item.name}</h4>
              </CardHeader>
              <CardBody className="overflow-visible">
                <Image
                  alt="Card background"
                  className="rounded-xl object-cover"
                  src={item.banner}
                />
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignPage;
