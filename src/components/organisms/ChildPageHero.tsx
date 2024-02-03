import React from "react";
import Image from "next/image";

// scss import
import styles from "./styles/ChildPageHero.module.scss";

// components import

// props type
export type ChildPageHeroProps = {
  id: number;
  enTitle: string;
  desc: React.ReactNode;
  img: string;
};

const ChildPageHero = ({ id, enTitle, desc, img }: ChildPageHeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <h1 className={styles.title}>{enTitle}</h1>
          <div className={styles.descBox}>{desc}</div>
        </div>
        <div className={styles.rightBox}>
          <Image
            className={styles.img}
            src={img}
            width={400}
            height={400}
            alt="child page hero main img"
          />
        </div>
      </div>
    </div>
  );
};

export default ChildPageHero;
