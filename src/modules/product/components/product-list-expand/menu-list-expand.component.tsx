import { Products } from "@app/core/types";
import { Typography } from "@mui/material";
import { useRecordContext } from "react-admin";

export const ProductListExpand = () => {
  const productItem = useRecordContext<Products>();
  return (
    <div style={{ display: "flex", gap: 64 }}>
      <div>
        <Typography variant="subtitle2">Опис</Typography>
        <Typography variant="body2">{productItem.description}</Typography>
      </div>
      <div>
        <Typography variant="subtitle2">Вага</Typography>
        <Typography variant="body2">{productItem.weight}</Typography>
      </div>
    </div>
  );
};
