import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { EditGuesser, ListGuesser, ShowGuesser } from "react-admin";
import { OrderList } from "./components/order-list/order-list.component";
import { OrderShow } from "./components/order-show/order-show.component";
import { OrderEdit } from "./components/order-edit/order-edit.component";
import { OrderCreate } from "./components/order-create/order-create.component";

export const orderResource = {
  name: "orders",
  list: OrderList,
  edit: OrderEdit,
  show: OrderShow,
  create: OrderCreate,
  options: { label: "Замовлення" },
  icon: ShoppingBagIcon,
};
