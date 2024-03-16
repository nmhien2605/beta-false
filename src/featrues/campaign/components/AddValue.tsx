import { Button, Card, Divider, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { Dispatch, useState } from 'react';
import Image from '@/components/ui/Image';
import { useCreateCampaign } from '@/hooks/campaign/useCreate';
import { useWalletData } from '@/stores/walletData';

const AddValue = ({
  back,
  data,
  setData,
}: {
  back: () => void;
  data: ICampaignCreate;
  setData: Dispatch<React.SetStateAction<ICampaignCreate>>;
}) => {
  const router = useRouter();
  const { address } = useWalletData();
  const { mutateAsync: create } = useCreateCampaign();
  const [type, setType] = useState('cash');

  const handleCreate = async () => {
    try {
      // @ts-ignore
      await window.mina?.signMessage({ message: 'Create campaign' }).catch((err: any) => err);
    } catch (error) {}
    create({ marchant: address, payload: data });
    router.replace('/campaign/success');
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex aspect-video w-full items-center justify-center rounded-xl border shadow">
            <Image
              src={data.voucherOffchainData.image}
              alt=""
              fit="cover"
              className="aspect-video w-full rounded-2xl bg-slate-100 [&>img]:!rounded-2xl"
            />
          </div>
          <div>Banner voucher, ratio 2:1</div>
          <div>Max size: 1MB</div>
        </div>
        <div className="col-span-1 flex flex-col gap-4 md:col-span-2">
          <Input
            label="Voucher name"
            labelPlacement="outside"
            placeholder="Enter your voucher name"
            value={data.voucherOffchainData.name}
            onChange={(e) =>
              setData({
                ...data,
                voucherOffchainData: { ...data.voucherOffchainData, name: e.target.value },
              })
            }
          />

          <Textarea
            label="Description"
            labelPlacement="outside"
            placeholder="Description"
            value={data.voucherOffchainData.description}
            onChange={(e) =>
              setData({
                ...data,
                voucherOffchainData: { ...data.voucherOffchainData, description: e.target.value },
              })
            }
          />

          <Card className="flex w-full flex-row gap-2 p-1">
            <Button
              color={type === 'cash' ? 'primary' : 'default'}
              className="flex-grow"
              onClick={() => setType('cash')}
            >
              Cash voucher
            </Button>
            <Button
              color={type === 'discount' ? 'primary' : 'default'}
              className="flex-grow"
              onClick={() => setType('discount')}
            >
              Discount voucher
            </Button>
          </Card>

          <Select placeholder="Gift category">
            <SelectItem key="cash" value="cash">
              Cash voucher
            </SelectItem>
            <SelectItem key="discount" value="discount">
              Discount voucher
            </SelectItem>
          </Select>

          {/* <Input label="Category" /> */}

          <div className="font-semibold">Dispensed quantity</div>

          <div>
            <div className="flex items-center gap-2">
              <Input
                endContent={<div>LOY</div>}
                type="number"
                value={`${data.voucherOffchainData.cost}`}
                onChange={(e) =>
                  setData({
                    ...data,
                    voucherOffchainData: { ...data.voucherOffchainData, cost: +e.target.value },
                  })
                }
              />
              =
              <Input
                readOnly
                endContent={<div>VNĐ</div>}
                value={`${data.voucherOffchainData.cost * 25000}`}
              />
              <div />
              <Input
                startContent={<div>Quantity: </div>}
                value={`${data.totalSupply}`}
                onChange={(e) => setData({ ...data, totalSupply: +e.target.value })}
              />
            </div>
          </div>

          <Divider />

          <div className="flex justify-between">
            <div>Initialization fee:</div>
            <div>1.02 LOY</div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between gap-4">
        <Button onClick={back} className="px-12 font-semibold">
          Back
        </Button>
        <Button color="primary" onClick={handleCreate} className="px-12 font-semibold">
          Create
        </Button>
      </div>
    </div>
  );
};

export default AddValue;
