import { Button, Card } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-lg gap-8">
        <Card className="w-full p-4">
          <div>Campaign</div>
          <div>Description</div>
          <Link href="/campaign">
            <Button className="w-full">Campaign</Button>
          </Link>
        </Card>
        <Card className="w-full p-4">
          <div>Reward</div>
          <div>Description</div>
          <Link href="/reward">
            <Button className="w-full">Reward</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Page;
