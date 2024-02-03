import React from "react";

// scss import
import styles from "./About.module.scss";

// components import

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1>this page is about page</h1>
      </div>
    </div>
  );
};

export default About;
