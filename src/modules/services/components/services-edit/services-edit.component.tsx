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

export const ServicesEdit = () => {
  return (
    <Edit title={<CustomTitle source={"title"} />}>
      <SimpleForm>
        <TextInput source="name" fullWidth label="Назва" />

        <TextInput source="description" fullWidth label="Опис" />
        <ReferenceInput
          source="category"
          reference="price_list_categories"
          label="Категорія"
        >
          <SelectInput optionText="title" label="Спеціалізація" />
        </ReferenceInput>
        <CloudinaryInput source="image" label="Фото" />
      </SimpleForm>
    </Edit>
  );
};
