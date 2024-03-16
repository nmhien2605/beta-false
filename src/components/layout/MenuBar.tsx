import { Copy } from '@/assets/icons';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const list = [
  {
    key: 'my-vouchers',
    link: '/my-vouchers',
    icon: <Copy size={24} />,
    label: ['My Vouchers', ' '],
  },
  {
    key: 'campaign',
    link: '/campaign',
    icon: <Copy size={24} />,
    label: ['Campaign', 'Management'],
  },
  {
    key: 'reward',
    link: '/reward',
    icon: <Copy size={24} />,
    label: ['Customers', 'Management'],
  },
];

const MenuBar = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:relative md:bottom-0 md:right-auto md:h-[calc(100vh-112px)]">
      <div className="flex h-full flex-row gap-4 break-all rounded-2xl bg-gray-100 p-1 px-4 shadow  md:flex-col md:gap-2 md:px-1">
        {list.map((item) => (
          <Link key={item.key} href={item.link}>
            <Button
              key={item.key}
              variant="light"
              className="flex aspect-square h-auto flex-col p-1 text-xs"
            >
              <div className="h-6 w-6">{item.icon}</div>
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
