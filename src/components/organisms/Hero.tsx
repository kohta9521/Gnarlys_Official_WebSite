import React from "react";

// scss import
import styles from "./styles/Hero.module.scss";

// components import
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <div className={styles.bgImg}>
        <Header />
        <div className={styles.hero}>
          
        </div>
      </div>
    </>
  );
};

export default Hero;
