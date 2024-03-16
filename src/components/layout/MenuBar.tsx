import { Campaign, Customer, Voucher } from '@/assets/icons';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const list = [
  {
    key: 'voucher',
    link: '/voucher',
    icon: <Voucher size={36} />,
    label: ['Vouchers', ' '],
  },
  {
    key: 'campaign',
    link: '/campaign',
    icon: <Campaign size={36} />,
    label: ['Campaign', 'Management'],
  },
  {
    key: 'reward',
    link: '/reward',
    icon: <Customer size={36} />,
    label: ['Customers', 'Management'],
  },
];

const MenuBar = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex h-fit justify-center md:relative md:bottom-auto md:right-auto">
      <div className="flex flex-row gap-4 break-all rounded-2xl bg-white px-4 py-2 shadow md:flex-col md:gap-2 md:px-1 md:py-4">
        {list.map((item) => (
          <Link key={item.key} href={item.link}>
            <Button
              key={item.key}
              variant="light"
              className="flex aspect-square h-auto w-full flex-col p-2 text-xs"
            >
              <div className="h-12 w-12 rounded-full bg-slate-100 p-2">{item.icon}</div>
              <div>
                <div>{item.label[0]}</div>
                <div>{item.label[1]}</div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
