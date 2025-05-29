import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.component";

export const ServiceCategoriesCreate = () => (
  <Create title="Додати категорію">
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
  </Create>
);
