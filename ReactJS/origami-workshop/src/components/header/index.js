import React from "react";
import styles from "./index.module.css";
import Link from "../link";

const Header = () => {
  return (
    <header className={styles.navigation}>
      <ul>
        <Link href="#" title="Going to 1" />
        <Link href="#" title="Going to 2" />
        <Link href="#" title="Going to 3" />
        <Link href="#" title="Going to 4" />
        <Link href="#" title="Going to 5" />
      </ul>
    </header>
  );
};

export default Header;
