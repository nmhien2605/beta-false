'use client';

import React, { useState } from 'react';
import { cn } from '@/utils/classname';
import AddName from './components/AddName';
import AddValue from './components/AddValue';
import { Button, Divider } from '@nextui-org/react';
import Image from '@/components/ui/Image';

import successBg from '@/assets/images/successBg.png';
import Link from 'next/link';

const RewardAddPage = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <div className="flex w-full flex-col gap-4">
      <div>
        <div className="text-4xl font-semibold">
          {step === 0 ? 'Create a list of loyal customers' : 'Confirm transfer'}
        </div>
        <div className="mt-2 text-sm">
          {step === 0
            ? 'Those who are on your loyal customer list will be given some LOY tokens by you with the goal of redeeming vouchers in the community ecosystem or can be converted to other types of tokens.'
            : 'Please check the information below before the transaction is made. Note, that blockchain transactions are not reversible.'}
        </div>
      </div>

      <div className="w-full text-center text-sm font-medium text-gray-500 dark:text-gray-400">
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

      <Divider />

      <div>
        <div className={cn(step === 0 ? '' : 'hidden')}>
          <AddName next={() => setStep(1)} />
        </div>
        <div className={cn(step === 1 ? '' : 'hidden')}>
          <AddValue back={() => setStep(0)} />
        </div>
      </div>
    </div>
  );
};

export default RewardAddPage;
