import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "@app/core/theme";
import { ThemeProvider } from "react-admin";

import { FinanceChartTooltip } from "./finance-chard-tooltip.component";

const meta: Meta<typeof FinanceChartTooltip> = {
  title: "Dashboard/Finance chart tooltip",
  component: FinanceChartTooltip,
};

export default meta;
type Story = StoryObj<typeof FinanceChartTooltip>;

export const Primary: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <FinanceChartTooltip {...args} />
    </ThemeProvider>
  ),
  args: {
    active: true,
    payload: [
      {
        payload: {
          count: 5,
          date: "2023-08-13",
          sum: 1451,
        },
      },
    ],
  },
};
