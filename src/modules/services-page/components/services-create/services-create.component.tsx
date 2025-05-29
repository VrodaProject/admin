import { Create, SimpleForm, TextInput } from "react-admin";

export const ServicesCreate = () => (
  <Create title="Додати секцію">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва секції" />
    </SimpleForm>
  </Create>
);
