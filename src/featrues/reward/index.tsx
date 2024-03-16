'use client';

import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import Image from '@/components/ui/Image';
import TitleBar from '@/components/ui/TitleBar';
import Link from 'next/link';
import { Add } from '@/assets/icons';

const list = [
  {
    id: 1,
    name: 'vouchers 1',
    startDate: '2022-10-10',
    users: 100,
    vouchers: 100,
  },
  {
    id: 2,
    name: 'vouchers 2',
    startDate: '2022-10-10',
    users: 100,
    vouchers: 100,
  },
];

const RewardPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <TitleBar
          back="/dashboard"
          title="Customer management"
          description="You can create and manage your loyal customer list here."
        />
        <div className="flex w-full items-center justify-between gap-4 md:w-fit md:justify-end">
          {/* <Input
            type="text"
            placeholder="Search"
            className="max-w-xs"
            // startContent={
            //   <MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
            // }
          /> */}
          <Link href="/reward/add">
            <Button color="success">
              <Add />
              Create a reward list
            </Button>
          </Link>
        </div>
      </div>

      <Divider />

      <Table removeWrapper aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Users</TableColumn>
          <TableColumn>Start date</TableColumn>
          <TableColumn>Vouchers</TableColumn>
        </TableHeader>
        <TableBody>
          {list.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.users}</TableCell>
              <TableCell>{item.startDate}</TableCell>
              <TableCell>{item.vouchers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RewardPage;
