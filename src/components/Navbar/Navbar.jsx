import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <a href="" className={styles.Title}>
        <h1>Tom Pluse</h1>
      </a>
      <ul className={styles.Nav_links}>
        <li className={styles.Nav_item}>
          <a href="">Work</a>
        </li>
        <li className={styles.Nav_item}>
          <a href="">About</a>
        </li>
        <li className={styles.Nav_item}>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
