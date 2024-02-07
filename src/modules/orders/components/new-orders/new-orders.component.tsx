import { Order_Status_Enum, Orders, Products } from "@app/core/types";
import {
  ChipField,
  Datagrid,
  DateField,
  EditButton,
  FunctionField,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
} from "react-admin";
import { InlineStatusEdit } from "../inline-status-edit/inline-status-edit.component";

export const NewOrders = () => {
  return (
    <List
      resource="orders"
      hasCreate={false}
      exporter={false}
      filter={{
        "status@_in": [
          Order_Status_Enum.New,
          Order_Status_Enum.InProgress,
          Order_Status_Enum.Done,
        ],
      }}
    >
      <Datagrid bulkActionButtons={false} rowClick="show">
        <InlineStatusEdit label="Статус замовлення" />
        <ReferenceField
          reference="order_status"
          source="status"
          label="Статус замовлення"
          link={false}
        >
          <ChipField source="label" />
        </ReferenceField>
        <ReferenceField
          reference="payment_status"
          source="payment_status"
          label="Статус оплати"
          link={false}
        >
          <TextField source="label" />
        </ReferenceField>

        <DateField
          source="created_at"
          label="Створено"
          showTime
          options={{ timeZone: "Europe/Kiev" }}
        />
        <FunctionField
          label="Сума"
          source="sum"
          render={(record: Orders) => `${record.sum} грн.`}
        />
        <EditButton />
      </Datagrid>
    </List>
  );
};
