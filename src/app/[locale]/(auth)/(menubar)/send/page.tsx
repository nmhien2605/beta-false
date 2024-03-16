import { Input } from '@nextui-org/react';
import React from 'react';

const Page = () => {
  const [sendData, setSendData] = React.useState({
    address: '',
    amount: '',
    fee: '',
    memo: '',
  });

  return (
    <div>
      <Input
        label="Address"
        value={sendData.address}
        onChange={(e) => setSendData({ ...sendData, address: e.target.value })}
      />
      <Input
        label="Amount"
        value={sendData.amount}
        onChange={(e) => setSendData({ ...sendData, amount: e.target.value })}
      />
      <Input
        label="Fee"
        value={sendData.address}
        onChange={(e) => setSendData({ ...sendData, address: e.target.value })}
      />
      <Input
        label="Memo"
        value={sendData.address}
        onChange={(e) => setSendData({ ...sendData, address: e.target.value })}
      />
    </div>
  );
};

export default Page;
