import { ProductsCategoryCreate } from "./components/products-category-create/products-category-create.component";
import { ProductsCategoryEdit } from "./components/products-category-edit/products-category-edit.component";
import { ProductsCategoryList } from "./components/products_category-list/catagory-list.component";
import CategoryIcon from "@mui/icons-material/Category";

export const ProductsCategoriesResource = {
  name: "products_categories",
  list: ProductsCategoryList,
  edit: ProductsCategoryEdit,
  options: { label: "Категорії продукції" },
  create: ProductsCategoryCreate,
  icon: CategoryIcon,
};
