import { Datagrid, EditButton, List, TextField } from "react-admin";

export const ServicesList = () => (
  <List exporter={false} title="Секції послуг">
    <Datagrid bulkActionButtons={false}>
      <TextField source="title" label="Назва секції" />
      <EditButton />
    </Datagrid>
  </List>
);
