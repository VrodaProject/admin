import { Create, SimpleForm, TextInput } from "react-admin";

export const formServicesCreate = () => (
  <Create title="Додати послугу">
    <SimpleForm>
      <TextInput source="form_service_name" fullWidth label="Назва" />
    </SimpleForm>
  </Create>
);
