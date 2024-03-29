
import { Card, CardContent, Typography } from "@mui/material";
import { DateTime } from "luxon";
import { FC } from "react";

interface FinanceChartTooltipProps {
  active?: boolean;
  payload?: [
    {
      payload: {
        date: string;
        sum: number;
        count: number;
      };
    }
  ];
}

export const FinanceChartTooltip: FC<FinanceChartTooltipProps> = ({
  active,
  payload,
}) => {
  if (!active || !payload || !payload[0] || !payload[0].payload) return null;
  return (
    <Card>
      <CardContent>
        <Typography>
          {DateTime.fromFormat(
            payload[0].payload.date,
            "y-LL-dd"
          ).toLocaleString(DateTime.DATE_MED)}
        </Typography>
        <Typography>Сума зомовлень: {payload[0].payload.sum}</Typography>
        <Typography>Кількість зомовлень: {payload[0].payload.count}</Typography>
      </CardContent>
    </Card>
  );
};
