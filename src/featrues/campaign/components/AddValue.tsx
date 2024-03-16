import { Button, Divider, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import React from 'react';

const AddValue = ({ back, done }: { back: () => void; done: () => void }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex aspect-[2] w-full items-center justify-center rounded-xl border shadow">
          Upload image
        </div>
        <div>Banner voucher, ratio 2:1</div>
        <div>Max size: 1MB</div>
      </div>
      <div className="col-span-1 flex flex-col gap-4 md:col-span-2">
        <Input label="Voucher name" />

        <Textarea label="Description" />

        <Select label="Type" defaultSelectedKeys="cash">
          <SelectItem key="cash" value="cash">
            Cash voucher
          </SelectItem>
          <SelectItem key="discount" value="discount">
            Discount voucher
          </SelectItem>
        </Select>

        <Input label="Category" />

        <div className="font-semibold">Dispensed quantity</div>

        <div>
          <div className="flex items-center gap-2">
            <Input endContent={<div>LOY</div>} />
            =
            <Input endContent={<div>VNĐ</div>} />
            <div />
            <Input startContent={<div>Quantity: </div>} />
          </div>
        </div>

        <Divider />

        <div className="flex justify-between">
          <div>Initialization fee:</div>
          <div>1.02 LOY</div>
        </div>

        <div className="font-semibold">Opening and closing time</div>

        <div className="flex items-center gap-4">
          <Input type="date" />
          to
          <Input type="date" />
        </div>

        <div className="mt-2 flex gap-4">
          <Button onClick={back}>Back</Button>
          <Button color="primary" onClick={done}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddValue;
