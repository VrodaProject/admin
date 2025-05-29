import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const ServiceCategoriesList = () => (
  <List exporter={false} title="Категорії послуг">
    <Datagrid bulkActionButtons={false}>
      <TextField source="title" label="Назва категорії" />
      <ReferenceField
        source="section_id"
        reference="service_sections"
        label="Секція"
      >
        <TextField source="title" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);
