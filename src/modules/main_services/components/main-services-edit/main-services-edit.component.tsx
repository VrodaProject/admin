import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.component";
import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import {
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

export const mainServicesEdit = () => {
  return (
    <Edit title={<CustomTitle source={"name"} />}>
      <SimpleForm>
        <TextInput source="name" fullWidth label="Назва" />
        <TextInput source="price" fullWidth label="Ціна" />
        <CloudinaryInput source="media" label="Медіа (Фото/Відео)" />
      </SimpleForm>
    </Edit>
  );
};