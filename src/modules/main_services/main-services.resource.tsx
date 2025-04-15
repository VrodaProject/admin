import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { mainServicesCreate } from "./components/main-services-create/main-services-create.component";
import { mainServicesList } from "./components/main-services-list/main-services-list.component";
import { mainServicesEdit } from "./components/main-services-edit/main-services-edit.component";

export const mainServicesResource = {
  name: "main_services",
  list: mainServicesList,
  edit: mainServicesEdit,
  create: mainServicesCreate,
  options: { label: "Послуги на головній" },
  icon: FaceRetouchingNaturalIcon,
};