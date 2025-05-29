import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";

export const ServiceSubcategoriesEdit = () => (
  <Edit title={<CustomTitle source="title" />}>
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва підкатегорії" />
      <TextInput source="price" fullWidth label="Ціна" />
      <TextInput source="description" fullWidth label="Опис" multiline />
      <ReferenceInput
        source="category_id"
        reference="service_categories"
        label="Категорія"
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
