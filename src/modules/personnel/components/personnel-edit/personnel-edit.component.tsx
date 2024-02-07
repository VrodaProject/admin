import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.component";
import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PersonnelEdit = () => {
  return (
    <Edit title={<CustomTitle source={"title"} />}>
      <SimpleForm>
        <TextInput source="name" fullWidth label="Ім'я" />
        <ReferenceInput
          source="personnel_category_id"
          reference="personnel_categories"
          label="Категорія"
        >
          <SelectInput optionText="title" label=" категорія" />
        </ReferenceInput>
        <TextInput source="description" fullWidth label="Опис" />
        <CloudinaryInput source="image" label="Фото" />
      </SimpleForm>
    </Edit>
  );
};
