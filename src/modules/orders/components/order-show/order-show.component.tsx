import { Orders, Products } from "@app/core/types";

import {
  Datagrid,
  FunctionField,
  ReferenceField,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";

export const OrderShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <FunctionField
          label="Сума"
          source="sum"
          render={(record: Orders) => `${record.sum} грн.`}
        />
        <ReferenceField
          reference="payment_types"
          source="payment_type"
          label="Оплата"
          link={false}
        >
          <TextField source="label" />
        </ReferenceField>
        <TextField source="client_address" label="Адреса" />
        <TextField source="client_name" label="Ім'я" />
        <TextField source="client_phone" label="Телефон" />
        <ReferenceField
          reference="order_status"
          source="status"
          label="Статус замовлення"
          link={false}
        >
          <TextField source="label" />
        </ReferenceField>
        <ReferenceField
          reference="payment_status"
          source="payment_status"
          label="Статус оплати"
          link={false}
        >
          <TextField source="label" />
        </ReferenceField>
        {/* <FunctionField
          label="Коментар"
          source="comment"
          render={(record: Orders) => record.comment ?? "Коментар пустий"}
        /> */}

        <ReferenceManyField
          reference="orders_products"
          target="order_id"
          label="Список замовлень"
        >
          <Datagrid bulkActionButtons={false}>
            <ReferenceField
              reference="products"
              source="products_id"
              link={false}
              label="Назва"
            >
              <TextField source="title" />
            </ReferenceField>
            <ReferenceField
              reference="products"
              source="products_id"
              link={false}
              label="Ціна"
            >
              <FunctionField
                label="Ціна"
                render={(record: Products) => `${record.price} грн.`}
              />
            </ReferenceField>
            <TextField source="amount" label="Кількість" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
