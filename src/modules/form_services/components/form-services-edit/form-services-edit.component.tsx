import { Edit, SimpleForm, TextInput } from "react-admin";

export const formServicesEdit = () => {
  return (
    <Edit title="Редактировать услугу">
      <SimpleForm>
        <TextInput source="form_service_name" fullWidth label="Назва" />
      </SimpleForm>
    </Edit>
  );
};
