import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { ServiceSubcategoriesCreate } from "./components/services-create/services-create.component";
import { ServiceSubcategoriesEdit } from "./components/services-edit/services-edit.component";
import { ServiceSubcategoriesList } from "./components/services-list/services-list.component";

export const pageServiceSubcategoriesResource = {
  name: "service_subcategories",
  list: ServiceSubcategoriesList,
  edit: ServiceSubcategoriesEdit,
  create: ServiceSubcategoriesCreate,
  options: { label: "Сторінка послуг – підкатегорії" },
  icon: FaceRetouchingNaturalIcon,
};
