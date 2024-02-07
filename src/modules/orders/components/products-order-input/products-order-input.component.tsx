import { getMenyReferenceFilter } from "@app/common/data/get-many-reference-filter";
import { Products } from "@app/core/types";
import { FC, useEffect, useState } from "react";
import {
  ArrayInput,
  AutocompleteInput,
  NumberInput,
  SimpleFormIterator,
  useDataProvider,
  useGetList,
  useRecordContext,
} from "react-admin";
import { useFormContext } from "react-hook-form";

interface ProductsOrderInputProps {}

export const ProductsOrderInput: FC<ProductsOrderInputProps> = () => {
  const record = useRecordContext();
  const dataProvider = useDataProvider();
  const { setValue } = useFormContext();
  const productsItems = useGetList("products");
  const [joinedEntities, setJoinedEntities] = useState<any>([]);
  const choices = productsItems.data?.map((productItem: Products) => ({
    id: productItem.id,
    name: productItem.title,
  }));

  useEffect(() => {
    if (!record) return;

    const fetchJoinReferences = async () => {
      const entities = await dataProvider.getManyReference("orders_products", {
        id: record.id,
        target: "order_id",
        sort: {
          field: "id",
          order: "DESC",
        },
        ...getMenyReferenceFilter,
      });

      setJoinedEntities(entities.data);
    };

    fetchJoinReferences();
  }, []);

  useEffect(() => {
    setValue("joined_orders_products", joinedEntities);
  }, [joinedEntities]);

  return (
    <ArrayInput source="joined_orders_products" label="Замовлення">
      <SimpleFormIterator inline>
        <AutocompleteInput
          choices={productsItems.data}
          translateChoice={false}
          optionText="title"
          source="products_id"
          label="Позиція товару"
          sx={{ width: 500 }}
        />
        <NumberInput source="amount" label="Кількість" />
      </SimpleFormIterator>
    </ArrayInput>
  );
};
