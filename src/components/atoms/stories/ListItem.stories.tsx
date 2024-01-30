import React from "react";
import { StoryObj, Meta } from "@storybook/react";

// components import
import ListItem, { ListItemProps } from "../ListItem";

const meta: Meta = {
  title: "Components/Atoms/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "表示するテキスト",
      control: {
        type: "text",
      },
    },
    link: {
      description: "リンク先",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type ListItemStory = StoryObj<typeof ListItem>;

export const Default: ListItemStory = {
  args: {
    text: "text",
    link: "/",
  },
};
