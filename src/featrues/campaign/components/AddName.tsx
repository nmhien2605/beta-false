import React from 'react';
import { Button, Input } from '@nextui-org/react';

const AddName = ({ next }: { next: () => void }) => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Input label="Name" />
      <Input label="Cost" endContent={<div className="text-gray-500">LOY</div>} />
      <Button color="primary" onClick={next}>
        Next
      </Button>
    </div>
  );
};

export default AddName;
