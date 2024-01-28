import React from "react";

// scss import
import styles from "./styles/MenuScreen.module.scss";

// props type
export type MenuScreenProps = {
  isOpen: boolean;
};

const MenuScreen = ({ isOpen }: MenuScreenProps) => {
  if (!isOpen) return null;
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <a href="/">Section 1</a>
      <a href="/">Section 2</a>
      <a href="/">Section 3</a>
    </div>
  );
};

export default MenuScreen;
