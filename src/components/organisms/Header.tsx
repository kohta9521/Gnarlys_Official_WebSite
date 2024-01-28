"use client";
import React, { useState } from "react";

// scss import
import styles from "./styles/Header.module.scss";

// components import
import ToggleBtn from "@/components/atoms/ToggleBtn";
import MenuScreen from "@/components/molecules/MenuScreen";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header}>
      <ToggleBtn isOpen={isOpen} toggle={toggle} />
      <MenuScreen isOpen={isOpen} />
      {/* <h1>header</h1> */}
    </div>
  );
};

export default Header;
