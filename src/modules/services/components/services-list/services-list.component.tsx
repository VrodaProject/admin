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

export const ServicesList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="name" label="Назва" />
      <TextField source="description" label="Опис" />

      <EditButton />
    </Datagrid>
  </List>
);
