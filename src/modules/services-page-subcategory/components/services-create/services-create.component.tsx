import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ServiceSubcategoriesCreate = () => (
  <Create title="Додати підкатегорію">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва підкатегорії" />
      <TextInput source="subtitle" fullWidth label="Підзаголовок" />
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
  </Create>
);
