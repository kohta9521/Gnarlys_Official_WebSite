import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Logo, { LogoProps } from "../Logo";

const meta: Meta = {
  title: "Components/Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "key設定用のID",
      control: {
        type: "number",
      },
    },
    link: {
      description: "リンク先",
      control: {
        type: "text",
      },
    },
    size: {
      description: "ロゴのサイズ",
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
};

export default meta;

type Logo = StoryObj<typeof Logo>;

export const Defualt: Logo = {
  args: {
    id: 1,
    link: "/",
    size: "medium",
  },
};

export const Small: Logo = {
  args: {
    id: 2,
    link: "/",
    size: "small",
  },
};

export const Large: Logo = {
  args: {
    id: 3,
    link: "/",
    size: "large",
  },
};
