import HomePage from "@/pages/Home/HomePage";
import styles from "./page.sass";
import Header from "@/components/Header/Header";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
          <HomePage />
      </main>
    </>
    
  );
}
