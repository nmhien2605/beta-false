import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <TitleBar
          back="/dashboard"
          title="Customer management"
          description="You can create and manage your loyal customer list here."
        />
        <div className="flex w-full items-center justify-between gap-4 md:w-fit md:justify-end">
          <Input
            type="text"
            placeholder="Search"
            className="max-w-xs"
            // startContent={
            //   <MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
            // }
          />
          <Link href="/reward/add">
            <Button color="success">
              <Add />
              Create a reward list
            </Button>
          </Link>
        </div>
      </div>
      <Table removeWrapper aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Users</TableColumn>
          <TableColumn>Start date</TableColumn>
          <TableColumn>Vouchers</TableColumn>
        </TableHeader>
        <TableBody items={list}>
          {/* {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          )} */}
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default RewardPage;
