import { Create, SimpleForm, TextInput } from "react-admin";

export const ProductsCategoryCreate = () => (
  <Create title="Створити категорію">
    <SimpleForm>
      <TextInput source="title" label="Назва" />
      <TextInput source="slug" label="Слаг" />
    </SimpleForm>
  </Create>
);
