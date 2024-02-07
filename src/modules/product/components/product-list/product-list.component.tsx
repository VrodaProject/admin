import {
  Datagrid,
  EditButton,
  FunctionField,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";

import { Products } from "@app/core/types";
import { ProductListExpand } from "../product-list-expand/menu-list-expand.component";

const filters = [
  <TextInput source="title" label="Пошук по назві" />,
  <ReferenceInput
    source="products_category_id"
    reference="products_categories"
    label="Категорія"
  >
    <SelectInput optionText="title" label=" категорія" />
  </ReferenceInput>,
];

export const ProductList = () => (
  <List filters={filters} exporter={false}>
    <Datagrid
      expand={ProductListExpand}
      rowClick="expand"
      bulkActionButtons={false}
    >
      <TextField source="title" label="Назва" />
      <ReferenceField
        source="products_category_id"
        reference="products_categories"
        label="Категорія"
      >
        <TextField source="title" label="Назва" />
      </ReferenceField>
      <FunctionField
        label="Ціна"
        render={(record: Products) => `${record.price} грн.`}
      />
      <EditButton />
    </Datagrid>
  </List>
);
