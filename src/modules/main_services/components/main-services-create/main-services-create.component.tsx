import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.component";
import {
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";

export const mainServicesCreate = () => (
  <Create title="Додати послугу">
    <SimpleForm>
      <TextInput source="name" fullWidth label="Назва" />
      <TextInput source="price" fullWidth label="Ціна" />
      <CloudinaryInput source="media" label="Медіа (Фото/Відео)" />
    </SimpleForm>
  </Create>
);