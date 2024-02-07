import { useDataProvider } from "react-admin";
import { JoinedOrdersMenuItem, OrderForm } from "../order.types";
import { getMenyReferenceFilter } from "@app/common/data/get-many-reference-filter";

interface MutateOptions {
  id: string;
  newReferences: JoinedOrdersMenuItem[];
}

export const useProductsOrderinput = () => {
  const joinResource = "orders_products";
  const resourceField = "order_id";
  const referenceField = "products_id";
  const dataProvider = useDataProvider();

  const mutate = async ({ id, newReferences }: MutateOptions) => {
    const prevReferences = await dataProvider.getManyReference(joinResource, {
      id,
      target: resourceField,
      sort: {
        field: "id",
        order: "DESC",
      },
      ...getMenyReferenceFilter,
    });

    const addedReferences = newReferences.filter((newReference) => {
      return !newReference.id;
    });

    const removedReferences = prevReferences.data?.filter(
      (prevReference) =>
        !newReferences.some((ref) => ref.id === prevReference.id)
    );

    const editedReferences = newReferences.filter((newRef) => {
      const prevRef = prevReferences.data.find((ref) => ref.id === newRef.id);

      if (!prevRef) {
        return false;
      }

      return (
        newRef?.products_id !== prevRef.products_id ||
        newRef?.amount !== prevRef.amount
      );
    });

    if (addedReferences.length > 0) {
      await Promise.all(
        addedReferences.map((referenceId) => {
          const newOrdersProductsItem = {
            [resourceField]: id,
            [referenceField]: referenceId.products_id,
            amount: referenceId.amount,
          };
          return dataProvider.create(joinResource, {
            data: newOrdersProductsItem,
          });
        })
      );
    }

    if (removedReferences.length > 0) {
      const removedIds = removedReferences.map(
        (removedReference) => removedReference.id
      );
      await dataProvider.deleteMany(joinResource, { ids: removedIds });
    }
    if (editedReferences.length > 0) {
      await Promise.all(
        editedReferences.map((reference) => {
          const data = {
            id: reference.id,
            [referenceField]: reference.products_id,
            amount: reference.amount,
          };
        

          const previousData = prevReferences.data.find(
            (prefRef) => prefRef.id === reference.id
          );
        

          return dataProvider.update(joinResource, {
            id: reference.id,
            data: data,
            previousData: previousData,
          });
        })
      );
    }
  };
  return { mutate };
};
