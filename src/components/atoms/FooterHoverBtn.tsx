import React from "react";
import Link from "next/link";

import styles from "./styles/FooterHoverBtn.module.scss";

export type FooterHoverBtnProps = {
  id: number;
  title: string;
  desc: string;
  link: string;
};

const FooterHoverBtn = ({
  id,
  title,
  desc,
  link,
}: FooterHoverBtnProps) => {
  return (
    <Link className={styles.box} href={link} key={id}>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
    </Link>
  );
};

export default FooterHoverBtn;
