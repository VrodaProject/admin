import { Datagrid, EditButton, List, ReferenceField, TextField } from "react-admin";

export const ServiceSubcategoriesList = () => (
  <List exporter={false} title="Підкатегорії послуг">
    <Datagrid bulkActionButtons={false}>
      <TextField source="title" label="Назва" />
      <TextField source="price" label="Ціна" />
      <TextField source="description" label="Опис" />
      <ReferenceField source="category_id" reference="service_categories" label="Категорія">
        <TextField source="title" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);
