import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ToggleBtn, { ToggleBtnProps } from "../ToggleBtn";

export default {
  title: "Components/Atoms/ToggleBtn",
  component: ToggleBtn,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Menu open state",
    },
    toggle: {
      action: "toggled",
      description: "Function to toggle menu state",
    },
  },
} as Meta<ToggleBtnProps>;

// デフォルトのストーリーを設定します
export const Default: StoryObj<ToggleBtnProps> = {
  args: {
    isOpen: false,
  },
};

// メニューが開いている状態のストーリー
export const Open: StoryObj<ToggleBtnProps> = {
  args: {
    isOpen: true,
  },
};
