import { Datagrid, List, TextField } from "react-admin";

export const ProductsCategoryList = () => (
  <List exporter={false}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="title" label="Назва" />
    </Datagrid>
  </List>
);
