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
import { ProductListExpand } from "@app/modules/product/components/product-list-expand/menu-list-expand.component";

export const PriceListList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="title" label="Назва" />
      <ReferenceField
        source="price_list_category_id"
        reference="price_list_categories"
        label="Категорія"
      >
        <TextField source="title" label="Назва" />
      </ReferenceField>
      <TextField source="price" label="Ціна" />
      <EditButton />
    </Datagrid>
  </List>
);
