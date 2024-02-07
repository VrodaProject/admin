import { ManyToManyInput } from "@app/common/components/many-to-many-input/many-to-many-input.component";
import { useManyToManyInput } from "@app/common/hooks/useManyToManyInput";
import { Order_Status_Enum } from "@app/core/types";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  useRedirect,
} from "react-admin";
import { redirect } from "react-router-dom";
import { JoinedOrdersMenuItem, OrderForm } from "../order.types";
import { useRef } from "react";
import { ProductsOrderInput } from "../products-order-input/products-order-input.component";
import { useProductsOrderinput } from "../hooks/use-products-order-input.hook";

export const OrderCreate = () => {
  const { mutate } = useProductsOrderinput();
  const newReferences = useRef<JoinedOrdersMenuItem[]>([]);
  const transform = (data: OrderForm) => {
    newReferences.current = data.joined_orders_products;
    return data;
  };

  const redirect = useRedirect();
  const onSuccess = async (data: Omit<OrderForm, "joined_orders_products">) => {
    await mutate({
      id: data.id,
      newReferences: newReferences.current,
    });
    redirect("show", "orders", data.id);
  };
  return (
    <Create
      title="Нове замовлення"
      transform={transform}
      mutationOptions={{ onSuccess }}
    >
      <SimpleForm>
        <TextInput source="client_address" label="Адреса" fullWidth />
        <TextInput source="client_name" label="Ім'я" />
        <TextInput source="client_phone" label="Телефон" />
        <ReferenceInput source="status" reference="order_status">
          <SelectInput
            optionText="label"
            label=" Статус замовлення"
            defaultValue={Order_Status_Enum.New}
            disabled
          />
        </ReferenceInput>
        <ProductsOrderInput />
      </SimpleForm>
    </Create>
  );
};
