import HailIcon from "@mui/icons-material/Hail";
import { PersonnelCreate } from "./components/personnele-create/personnele-create.component";
import { PersonnelList } from "./components/personnel-list/personnel-list.component";
import { PersonnelEdit } from "./components/personnel-edit/personnel-edit.component";

export const personnelResource = {
  name: "personnel",
  list: PersonnelList,
  edit: PersonnelEdit,
  create: PersonnelCreate,
  options: { label: "Персонал" },
  icon: HailIcon,
};
