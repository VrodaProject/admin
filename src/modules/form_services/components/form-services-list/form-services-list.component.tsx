import {
  Datagrid,
  EditButton,
  List,
  TextField,
} from "react-admin";

export const formServicesList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="form_service_name" label="Назва" />
      <EditButton />
    </Datagrid>
  </List>
);
