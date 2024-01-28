import React from "react";

// scs import
import styles from "./styles/ToggleBtn.module.scss";

// props type
export type ToggleBtnProps = {
  isOpen: boolean;
  toggle: () => void;
};

const ToggleBtn = ({ isOpen, toggle }: ToggleBtnProps) => {
  return (
    <button className={styles.menuButton} onClick={toggle}>
      <div className={styles.icon}>
        <span className={`${styles.line} ${isOpen ? styles.open : ""}`}></span>
        <span className={`${styles.line} ${isOpen ? styles.open : ""}`}></span>
        <span className={`${styles.line} ${isOpen ? styles.open : ""}`}></span>
      </div>
    </button>
  );
};

export default ToggleBtn;
