import { useDataProvider } from "react-admin";
import { getMenyReferenceFilter } from "../data/get-many-reference-filter";

interface useManyToManyInputOptions {
  joinResource: string;
  resourceField: string;
  referenceField: string;
}

interface MutateJoinResourceOptions {
  id: string;
  newReferences: string[];
}

export const useManyToManyInput = ({
  joinResource,
  resourceField,
  referenceField,
}: useManyToManyInputOptions) => {
  const dataProvider = useDataProvider();
  const mutateJoinResource = async ({
    id,
    newReferences,
  }: MutateJoinResourceOptions) => {
    const prevReferences = await dataProvider.getManyReference(joinResource, {
      id: id,
      target: resourceField,
      sort: {
        field: "id",
        order: "DESC",
      },
      ...getMenyReferenceFilter,
    });

    const addedReferences = newReferences.filter((newReference) => {
      return !prevReferences.data?.find(
        (prevRef) => prevRef.id === newReference
      );
    });

    const removedReferences = prevReferences.data?.filter(
      (prevReference) => !newReferences.includes(prevReference.id)
    );

    if (addedReferences.length > 0) {
      await Promise.all(
        addedReferences.map((referenceId) => {
          const newOrdersMenuItem = {
            [resourceField]: id,
            [referenceField]: referenceId,
          };
          return dataProvider.create(joinResource, {
            data: newOrdersMenuItem,
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
  };
  const fieldsProps = {
    joinResource,
    resourceField,
    referenceField,
  };
  return { mutateJoinResource, fieldsProps };
};
