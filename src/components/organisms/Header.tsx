"use client";
import React, { useState } from "react";

// scss import
import styles from "./styles/Header.module.scss";

// components import
import ToggleBtn from "@/components/atoms/ToggleBtn";
import MenuScreen from "@/components/molecules/MenuScreen";
import Logo from "../atoms/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo id={1} link="/" size="medium" />
        <ToggleBtn isOpen={isOpen} toggle={toggle} />
        <MenuScreen isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Header;
