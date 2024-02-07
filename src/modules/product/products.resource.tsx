import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

import { ProductCreate } from "./components/product-create/product-create.component";
import { ProductEdit } from "./components/product-edit/product-edit.component";
import { ProductList } from "./components/product-list/product-list.component";

export const productsResource = {
  name: "products",
  list: ProductList,
  edit: ProductEdit,
  create: ProductCreate,
  options: { label: "Продукція" },
  icon: RestaurantMenuIcon,
};
