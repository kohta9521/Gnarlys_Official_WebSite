import React from "react";

// scss improt
import styles from "./styles/About.module.scss";

// components import
import SectionTitle from "../molecules/SectionTitle";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <SectionTitle
          id={1}
          enTitle="ABOUT"
          jaTitle="Gnarlysとは？"
          align="left"
        />
      </div>
    </div>
  );
};

export default About;
