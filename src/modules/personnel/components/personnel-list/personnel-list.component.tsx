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

export const PersonnelList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="name" label="Ім'я" />
      <ReferenceField
        source="personnel_category_id"
        reference="personnel_categories"
        label="Категорія"
      >
        <TextField source="title" label="Назва" />
      </ReferenceField>

      <EditButton />
    </Datagrid>
  </List>
);
