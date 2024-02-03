import { Meta, StoryObj } from "@storybook/react";
import FooterHoverBtn, { FooterHoverBtnProps } from "../FooterHoverBtn";

const meta = {
  title: "Components/Atoms/FooterHoverBtn",
  component: FooterHoverBtn,
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "key設定用のID",
      control: {
        type: "number",
      },
    },
    title: {
      description: "ボタンのタイトル",
      control: {
        type: "text",
      },
    },
    desc: {
      description: "ボタンの説明",
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
} satisfies Meta<typeof FooterHoverBtn>;

export default meta;

type FooterHoverBtn = StoryObj<typeof FooterHoverBtn>;

export const Default: FooterHoverBtn = {
  args: {
    id: 1,
    title: "title",
    desc: "description",
    link: "/",
  },
};

export const LongDesc: FooterHoverBtn = {
  args: {
    id: 2,
    title: "titletitletitle",
    desc: "descriptiondescriptiondescriptiondescriptiondescription",
    link: "/",
  },
};
