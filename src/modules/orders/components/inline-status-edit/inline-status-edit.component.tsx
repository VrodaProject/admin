import { Order_Status_Enum, Orders } from "@app/core/types";
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC, useEffect, useState } from "react";
import {
  AutocompleteInput,
  ReferenceInput,
  SelectInput,
  useGetList,
  useListContext,
  useNotify,
  useRecordContext,
  useUpdate,
} from "react-admin";

interface InlineStatusEditProps {
  label?: string;
}

export const InlineStatusEdit: FC<InlineStatusEditProps> = ({ label }) => {
  const record = useRecordContext<Orders>();
  const orderStatuses = useGetList("order_status");
  const notify = useNotify();
  const stopPropagation = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const { resource } = useListContext();
  const [changeStatus] = useUpdate();

  const handleChange = async (event: SelectChangeEvent<Order_Status_Enum>) => {
    try {
      await changeStatus(
        resource,
        {
          id: record.id,
          data: { status: event.target.value },
          previousData: record,
        },
        { mutationMode: "pessimistic" }
      );
      notify("Статус замовлення змінено!", { type: "success" });
    } catch (error) {
      notify("Щось пішло не так🥲", { type: "error" });
    }
  };

  return (
    <Select
      value={record.status!}
      label={label}
      onChange={handleChange}
      fullWidth
      variant="standard"
    >
      {orderStatuses.data?.map((orderStatus) => (
        <MenuItem
          value={orderStatus.id}
          onClick={stopPropagation}
          key={`$item-${record.id}`}
        >
          {orderStatus.label}
        </MenuItem>
      ))}
    </Select>
  );
};
