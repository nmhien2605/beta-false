import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import Image from '@/components/ui/Image';

import successBg from '@/assets/images/successBg.png';

const RewardAddSuccess = () => {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="flex w-full flex-col items-center gap-2 text-sm">
        <div className=" relative mb-10 mt-20 h-40 w-full">
          <div className=" absolute left-1/2 top-1/2 aspect-square w-[400px] -translate-x-1/2 -translate-y-1/2">
            <Image src={successBg} alt="" />
          </div>
        </div>
        <div className="text-center text-2xl font-semibold">Create a successful customer list!</div>
        <div className="text-center text-gray-500">
          <div>
            Your customers can use <span className=" font-semibold text-primary-500">LOY</span>{' '}
            tokens to redeem vouchers.
          </div>
          <div>
            You can gift LOY tokens to your customers in the{' '}
            <strong>&#34;Customers management&#34;</strong> section.
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <Link href="/reward">
            <Button radius="full" color="primary" className=" p-6 text-lg font-semibold uppercase">
              Customers management
            </Button>
          </Link>
          <Link href="/">
            <Button radius="full" color="default" className=" p-6 text-lg font-semibold uppercase">
              Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RewardAddSuccess;
