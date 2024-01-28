import React from "react";

// scss import
import styles from "../styles/page.module.scss";

// compoents import
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
