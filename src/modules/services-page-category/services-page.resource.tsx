import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { ServiceCategoriesCreate } from "./components/services-create/services-create.component";
import { ServiceCategoriesEdit } from "./components/services-edit/services-edit.component";
import { ServiceCategoriesList } from "./components/services-list/services-list.component";

export const pageServicesCategoryResource = {
  name: "service_categories",
  list: ServiceCategoriesList,
  edit: ServiceCategoriesEdit,
  create: ServiceCategoriesCreate,
  options: { label: "Сторінка послуг – категорії" },
  icon: FaceRetouchingNaturalIcon,
};
