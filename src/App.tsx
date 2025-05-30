import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { Admin, DataProvider, Loading, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import { authProvider } from "./core/auth-provider";
import { apolloClient } from "./core/apollo-client";
import { theme } from "./core/theme";
import { i18nProvider } from "./core/i18n";
import { ProductsCategoriesResource } from "./modules/category/products-category.resource";
import { productsResource } from "./modules/product/products.resource";
import { orderResource } from "./modules/orders/order.resource";
import { buildDataProvider } from "./core/data-provider";
import { customerResource } from "./modules/customers/customers.resource";
import { Dashboard } from "./modules/dashboard/components/dashboard/dashboard.component";
import OneSignalReact from "react-onesignal";
import { personnelResource } from "./modules/personnel/personnel.resource";
import { PriceListResource } from "./modules/price_list/price-list.resource";
import { servicesResource } from "./modules/services/services.resource";
import { formServicesResource } from "./modules/form_services/form-services.resource";
import { config } from "./core/config";
import { mainServicesResource } from "./modules/main_services/main-services.resource";
import { pageServicesResource } from "./modules/services-page/services-page.resource";
import { pageServicesCategoryResource } from "./modules/services-page-category/services-page.resource";
import { pageServiceSubcategoriesResource } from "./modules/services-page-subcategory/services-page.resource";
export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  );

  useEffect(() => {
    const getDataProvider = async () => {
      const dp = await buildDataProvider();

      setDataProvider(dp);
    };

    getDataProvider();
  }, []);

  useEffect(() => {
    OneSignalReact.init({ appId: "83b764ee-1bd9-4bb0-b98e-5194def59102" });
  }, []);

  if (!dataProvider) {
    return <Loading />;
  }

  return (
    <>
      <CssBaseline />
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        requireAuth
        theme={theme}
        dashboard={Dashboard}
      >
        <Resource {...productsResource} />
        <Resource {...personnelResource} />
        <Resource {...ProductsCategoriesResource} />
        <Resource {...PriceListResource} />
        <Resource {...servicesResource} />
        <Resource {...orderResource} />
        <Resource {...customerResource} />
        <Resource {...formServicesResource} />
        <Resource {...mainServicesResource} />
        <Resource {...pageServicesResource} />
        <Resource {...pageServicesCategoryResource} />
        <Resource {...pageServiceSubcategoriesResource} />

        <Resource name="order_status" />
        <Resource name="orders_products" />
        <Resource name="last_week_orders" />
      </Admin>
      ;
    </>
  );
};
