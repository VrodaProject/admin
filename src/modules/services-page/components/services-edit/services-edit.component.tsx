import { Edit, SimpleForm, TextInput } from "react-admin";
import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";

export const ServicesEdit = () => {
  return (
    <Edit title={<CustomTitle source="title" />}>
      <SimpleForm>
        <TextInput source="title" fullWidth label="Назва секції" />
      </SimpleForm>
    </Edit>
  );
};
