import {
  Datagrid,
  EditButton,
  List,
  TextField,
} from "react-admin";

export const mainServicesList = () => (
  <List exporter={false}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="name" label="Назва" />
      <TextField source="price" label="Ціна" />
      <EditButton />
    </Datagrid>
  </List>
);