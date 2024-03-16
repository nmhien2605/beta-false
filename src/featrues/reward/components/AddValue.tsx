import { useWalletData } from '@/stores/walletData';
import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Textarea,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const AddValue = ({ back }: { back: () => void }) => {
  const router = useRouter();
  const { network } = useWalletData();
  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* <Input value="Network" endContent={<div>{network.name}</div>} />
      <Input value="LOY token" endContent={<div>100</div>} />

      <Divider /> */}

      <Table hideHeader removeWrapper aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Transaction network:</TableCell>
            <TableCell>{network.name}</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Customers number:</TableCell>
            <TableCell>200</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>LOY token allocation quantity:</TableCell>
            <TableCell>872,846,985</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Initialization fee:</TableCell>
            <TableCell>10 LOY</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>Transaction execution time:</TableCell>
            <TableCell>08:00 AM - 20/04/2024</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* <div className="flex w-full justify-between">
        <div>Initialization fee:</div>
        <div>1.02 LOY</div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="font-semibold">Opening and closing time</div>

        <div className="flex items-center gap-4">
          <Input type="date" readOnly />
          <Input type="time" readOnly />
        </div>
      </div> */}

      <div className="mt-2 flex w-full justify-between gap-4">
        <Button onClick={back} className="px-12 font-semibold">
          Back
        </Button>
        <Button
          color="primary"
          className="px-12 font-semibold"
          onClick={() => router.replace('/reward/success')}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default AddValue;
