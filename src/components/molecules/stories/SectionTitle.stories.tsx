import React from "react";
import { StoryObj, Meta } from "@storybook/react";

// compoennts import
import SectionTitle, { SectionTitleProps } from "../SectionTitle";

const meta: Meta = {
  title: "Components/Molecules/SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "key設定用のID",
      control: {
        type: "number",
      },
    },
    enTitle: {
      description: "英語のタイトル",
      control: {
        type: "text",
      },
    },
    jaTitle: {
      description: "日本語のタイトル",
      control: {
        type: "text",
      },
    },
    align: {
      description: "タイトルの位置",
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
    },
  },
};

export default meta;

type SectionTitle = StoryObj<typeof SectionTitle>;

export const Default: SectionTitle = {
  args: {
    id: 1,
    enTitle: "Title",
    jaTitle: "タイトル",
    align: "center",
  },
};

export const Left: SectionTitle = {
  args: {
    id: 2,
    enTitle: "Title",
    jaTitle: "タイトル",
    align: "left",
  },
};

export const Center: SectionTitle = {
  args: {
    id: 3,
    enTitle: "Title",
    jaTitle: "タイトル",
    align: "center",
  },
};

export const Right: SectionTitle = {
  args: {
    id: 4,
    enTitle: "Title",
    jaTitle: "タイトル",
    align: "right",
  },
};
