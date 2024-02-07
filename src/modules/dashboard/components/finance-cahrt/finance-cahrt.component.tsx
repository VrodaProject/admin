import { Card, CardContent } from "@mui/material";
import { FC } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { FinanceChartTooltip } from "../finance-chard-tooltip/finance-chard-tooltip.component";

interface FinanceChartProps {
  data: any;
}

export const FinanceChart: FC<FinanceChartProps> = ({ data }) => {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip content={<FinanceChartTooltip active={true} payload={data} />} />
      <Bar dataKey="sum" fill="#047065" />
    </BarChart>
  );
};
