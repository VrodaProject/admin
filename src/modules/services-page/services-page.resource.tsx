import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { ServicesCreate } from "./components/services-create/services-create.component";
import { PersonnelList } from "../personnel/components/personnel-list/personnel-list.component";
import { ServicesList } from "./components/services-list/services-list.component";
import { ServicesEdit } from "./components/services-edit/services-edit.component";

export const pageServicesResource = {
  name: "service_sections",
  list: ServicesList,
  edit: ServicesEdit,
  create: ServicesCreate,
  options: { label: "Сторінка послуг" },
  icon: FaceRetouchingNaturalIcon,
};
