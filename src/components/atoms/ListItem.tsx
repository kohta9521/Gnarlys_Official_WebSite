import React from "react";

// sass import
import styles from "./styles/ListItem.module.scss";
import Link from "next/link";

// props type
export type ListItemProps = {
  text: string;
  link: string;
};

const ListItem = ({ text, link }: ListItemProps) => {
  return (
    <Link className={styles.link} href={link}>
      {text}
    </Link>
  );
};

export default ListItem;
