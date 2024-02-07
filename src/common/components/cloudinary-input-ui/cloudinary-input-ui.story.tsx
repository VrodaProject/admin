import type { Meta, StoryObj } from "@storybook/react";
import { CloudinaryInputUI } from "./cloudinary-input-ui.component";

import { ThemeProvider } from "react-admin";
import { theme } from "@app/core/theme";

const meta: Meta<typeof CloudinaryInputUI> = {
  title: "Common/Cloudinary Input",
  component: CloudinaryInputUI,
};

export default meta;
type Story = StoryObj<typeof CloudinaryInputUI>;

export const Primary: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <CloudinaryInputUI {...args} />
    </ThemeProvider>
  ),
  args: {
    label: "Головне Зображення",
  },
};
