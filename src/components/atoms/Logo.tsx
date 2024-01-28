import React from "react";
import Link from "next/link";
import Image from "next/image";

// scss import
import styles from "./styles/Logo.module.scss";

// props type
export type LogoProps = {
  id: number;
  link: string;
  size?: "small" | "medium" | "large";
};

const Logo = ({ id, link, size = "medium" }: LogoProps) => {
  return (
    <Link key={id} className={`${styles.logo} ${styles[size]}`} href={link}>
      {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}
      <h1 className={styles.logoText}>Gnarlys</h1>
    </Link>
  );
};

export default Logo;
