'use client';

import React, { useState } from 'react';
import { cn } from '@/utils/classname';
import AddName from './components/AddName';
import AddValue from './components/AddValue';
import { Button } from '@nextui-org/react';
import Image from '@/components/ui/Image';

import successBg from '@/assets/images/successBg.png';
import Link from 'next/link';

const CampaignAddPage = () => {
  const [step, setStep] = useState<number>(0);
  const [isDone, setDone] = useState<boolean>(false);

  if (isDone) {
    return (
      <div className="flex h-full flex-col justify-center">
        <div className="flex w-full flex-col items-center gap-2 text-sm">
          <div className=" relative mb-10 mt-20 h-40 w-full">
            <div className=" absolute left-1/2 top-1/2 aspect-square w-[400px] -translate-x-1/2 -translate-y-1/2">
              <Image src={successBg} alt="" />
            </div>
          </div>
          <div className="text-center text-2xl font-semibold">Voucher creation successful</div>
          <div className="text-center">
            <div>Your customers can use LOY tokens to redeem vouchers.</div>
            <div>
              You can gift LOY tokens to your customers in the &#34Customers management&#34 section.
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <Link href="/reward">
              <Button>Customers management</Button>
            </Link>
            <Link href="/campaign">
              <Button color="primary">Voucher management</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-center text-4xl">Create campaign</div>

      <div className="flex justify-center">
        <div className="w-full max-w-sm text-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <ul className="flex flex-wrap gap-1">
            {[1, 2].map((tab, index) => (
              <li
                key={`tadd-${index}`}
                className={cn(
                  'inline-block flex-grow border-b-4 pb-2',
                  step > index
                    ? 'border-gray-900 text-gray-900 dark:border-gray-900 dark:text-gray-900'
                    : '',
                  step === index
                    ? 'active border-primary-500 text-primary-500 dark:border-primary-500 dark:text-primary-500'
                    : '',
                  step < index
                    ? 'border-gray-200 text-gray-500 dark:border-gray-200 dark:text-gray-500'
                    : ''
                )}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <div className={cn(step === 0 ? '' : 'hidden')}>
            <AddName next={() => setStep(1)} />
          </div>
          <div className={cn(step === 1 ? '' : 'hidden')}>
            <AddValue back={() => setStep(0)} done={() => setDone(true)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignAddPage;
