import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.component";
import {
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PersonnelCreate = () => (
  <Create title="Додати персонал">
    <SimpleForm>
      <TextInput source="name" fullWidth label="Ім'я" />
      <ReferenceInput
        source="personnel_category_id"
        reference="personnel_categories"
        label="Категорія"
      >
        <SelectInput optionText="title" label="Спеціалізація" />
      </ReferenceInput>
      <TextInput source="description" fullWidth label="Опис" />
      <CloudinaryInput source="image" label="Фото" />
    </SimpleForm>
  </Create>
);
