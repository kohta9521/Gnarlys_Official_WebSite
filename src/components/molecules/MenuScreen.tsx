import React from "react";

// scss import
import styles from "./styles/MenuScreen.module.scss";

// components import
import ListItem from "../atoms/ListItem";

// props type
export type MenuScreenProps = {
  isOpen: boolean;
};

const MenuScreen = ({ isOpen }: MenuScreenProps) => {
  if (!isOpen) return null;
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <ListItem text="about" link="/" />
      <ListItem text="about2" link="/" />
      <ListItem text="about3" link="/" />
    </div>
  );
};

export default MenuScreen;
