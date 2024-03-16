import { useWalletData } from '@/stores/walletData';
import { Button, Card, Divider, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const AddName = ({ next }: { next: () => void }) => {
  const { network } = useWalletData();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex aspect-square w-full flex-col items-center justify-center rounded-xl border p-4 text-center shadow">
          <div className="text-lg font-semibold">Drag & drop file here</div>
          <div>Please use the correct Excel template structure below to enter data</div>
        </div>
        <div>
          <Link href="#">Download Excel template</Link>
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-4 md:col-span-2">
        <Card className="flex flex-row justify-between border p-2 shadow-none">
          <div>Your LOY quantity:</div>
          <div>
            <strong>2000</strong> Token
          </div>
        </Card>

        <div className="text-sm text-amber-500">
          Make sure the number of LOY tokens given does not exceed the number of LOY tokens you
          currently have + Initialization fee.
        </div>

        <div className="flex flex-col">
          <div className="text-xl font-semibold">Transaction information</div>
          <div className="text-sm">
            <span className="text-red-500">Important note:</span> your customers will receive{' '}
            <strong>LOY</strong>
            tokens through the Mina network.
          </div>
        </div>

        <Input
          variant="bordered"
          readOnly
          value="Transaction network"
          endContent={<div>{network.name}</div>}
        />

        <div className=" font-semibold">Wallet address</div>

        <div>
          <div className="grid grid-cols-3 items-center gap-2">
            <Input className=" col-span-2" startContent={<div className="">Address: </div>} />
            <Input endContent={<div>LOY</div>} />
            <div />
          </div>
        </div>

        <Divider />

        <div className="flex justify-between">
          <div>Initialization fee:</div>
          <div>1.02 LOY</div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="font-semibold">Transaction execution time</div>

          <div className="flex items-center gap-4">
            <Input type="date" />
            <Input type="time" />
          </div>
        </div>

        <div className="mt-2 flex justify-end gap-4">
          <Button color="primary" onClick={next} className="px-12 font-semibold">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddName;
