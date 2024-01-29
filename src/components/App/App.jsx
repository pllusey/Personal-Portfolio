import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import HeroCard from "../HeroCard/HeroCard";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.Body}>
        <HeroCard />
      </div>
    </div>
  );
}

export default App;
