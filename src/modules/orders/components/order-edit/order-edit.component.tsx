import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { OrderForm } from "../order.types";
import { ProductsOrderInput } from "../products-order-input/products-order-input.component";
import { useProductsOrderinput } from "../hooks/use-products-order-input.hook";

export const OrderEdit = () => {
  const { mutate } = useProductsOrderinput();

  const transform = async (data: OrderForm) => {
    await mutate({
      id: data.id,
      newReferences: data.joined_orders_products,
    });
    return data;
  };

  return (
    <Edit mutationMode="pessimistic" transform={transform}>
      <SimpleForm>
        <TextInput source="client_address" label="Адреса" fullWidth />
        <TextInput source="client_name" label="Ім'я" />
        <TextInput source="client_phone" label="Телефон" />
        <ReferenceInput
          source="status"
          reference="order_status"
          label="Категорія"
        >
          <SelectInput optionText="label" label="Статус замовлення" />
        </ReferenceInput>
        <ReferenceInput source="payment_status" reference="payment_status">
          <SelectInput optionText="label" label="Статус оплати" />
        </ReferenceInput>
        <ProductsOrderInput />
      </SimpleForm>
    </Edit>
  );
};
