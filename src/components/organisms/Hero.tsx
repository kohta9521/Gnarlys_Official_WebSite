import React from "react";

// scss import
import styles from "./styles/Hero.module.scss";

// components import
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <Header />
      <div className={styles.hero}></div>
    </>
  );
};

export default Hero;
