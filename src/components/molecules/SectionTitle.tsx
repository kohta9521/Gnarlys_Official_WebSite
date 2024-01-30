import React from "react";

// scss import
import styles from "./styles/SectionTitle.module.scss";

// props type
export type SectionTitleProps = {
  id: number;
  enTitle: string;
  jaTitle: string;
  align?: "left" | "center" | "right";
};

const SectionTitle = ({
  id,
  enTitle,
  jaTitle,
  align = "center",
}: SectionTitleProps) => {
  return (
    <div className={`${styles[align]} ${styles.sectionTitle}`}>
      <h1 className={styles.enTitle}>{enTitle}</h1>
      <h2 className={styles.jaTitle}>{jaTitle}</h2>
    </div>
  );
};

export default SectionTitle;
