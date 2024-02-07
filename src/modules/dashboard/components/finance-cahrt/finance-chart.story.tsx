import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "@app/core/theme";
import { ThemeProvider } from "react-admin";
import { FinanceChart } from "./finance-cahrt.component";

const meta: Meta<typeof FinanceChart> = {
  title: "Dashboard/Finance chart",
  component: FinanceChart,
};

export default meta;
type Story = StoryObj<typeof FinanceChart>;

export const Primary: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <FinanceChart {...args} />
    </ThemeProvider>
  ),
  args: {
    data: [
      {
        count: 5,
        date: "2023-08-13",
        sum: 1451,
      },
      {
        count: 6,
        date: "2023-08-14",
        sum: 1693,
      },
      {
        count: 3,
        date: "2023-08-15",
        sum: 889,
      },
      {
        count: 7,
        date: "2023-08-16",
        sum: 1936,
      },
      {
        count: 5,
        date: "2023-08-17",
        sum: 1279,
      },
      {
        count: 3,
        date: "2023-08-18",
        sum: 854,
      },
      {
        count: 107,
        date: "2023-08-19",
        sum: 30633,
      },
    ],
  },
};
