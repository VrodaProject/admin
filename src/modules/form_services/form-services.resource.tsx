import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { formServicesCreate } from "./components/form-services-create/form-services-create.component";
import { formServicesList } from "./components/form-services-list/form-services-list.component";
import { formServicesEdit } from "./components/form-services-edit/form-services-edit.component";

export const formServicesResource = {
  name: "form_services",
  list: formServicesList,
  edit: formServicesEdit,
  create: formServicesCreate,
  options: { label: "Послуги у формі" },
  icon: FaceRetouchingNaturalIcon,
};
