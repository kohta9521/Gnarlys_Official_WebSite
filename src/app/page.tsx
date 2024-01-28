import React from "react";

// scss import
import styles from "../styles/page.module.scss";

// compoents import
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Hero />
      <h1>hello</h1>
      <Footer />
    </div>
  );
}
