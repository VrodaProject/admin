import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.component";
import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";

export const ServiceCategoriesEdit = () => (
  <Edit title={<CustomTitle source="title" />}>
    <SimpleForm>
      <TextInput
        source="title"
        fullWidth
        label="Назва категорії"
        validate={required()}
      />

      <ReferenceInput
        source="section_id"
        reference="service_sections"
        label="Секція"
        validate={required()}
        parse={(value) => value ?? undefined}
      >
        <SelectInput optionText="title" />
      </ReferenceInput>

      <CloudinaryInput source="preview" label="Прев’ю" validate={required()} />
    </SimpleForm>
  </Edit>
);
