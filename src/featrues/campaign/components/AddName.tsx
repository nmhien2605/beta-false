import React, { Dispatch } from 'react';
import { Button, Input } from '@nextui-org/react';

const AddName = ({
  next,
  data,
  setData,
}: {
  next: () => void;
  data: ICampaignCreate;
  setData: Dispatch<React.SetStateAction<ICampaignCreate>>;
}) => {
  return (
    <div className="flex w-full flex-col items-center gap-4 p-2">
      <Input
        label="Campaign name"
        labelPlacement="outside"
        placeholder="Enter your event name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <div className="flex w-full flex-col gap-2">
        <div>
          <div className="font-semibold">Campaign cost</div>
          <div className="text-sm">You can set your campaign budget here</div>
        </div>
        <Input
          placeholder="1000"
          endContent={<div className="text-gray-500">LOY</div>}
          value={data.cost}
          onChange={(e) => setData({ ...data, cost: e.target.value })}
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <div className="font-semibold">Opening and closing time</div>

        <div className="flex items-center gap-4">
          <Input type="date" />
          to
          <Input type="date" />
        </div>
      </div>

      <div className="mt-4 flex w-full justify-end">
        <Button color="primary" onClick={next} className="px-12 font-semibold">
          NEXT
        </Button>
      </div>
    </div>
  );
};

export default AddName;
