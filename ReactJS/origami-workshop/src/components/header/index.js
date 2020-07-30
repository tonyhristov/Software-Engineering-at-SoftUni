import React from "react";
import LinkComponent from "../link";
import getNavigation from "../../utils/navigation";
import styles from "./index.module.css";
import logo from "../../images/white-origami-bird.png";

const Header = () => {
  const links = getNavigation();

  return (
    <header className={styles.navigation}>
      <img className={styles.logo} src={logo} />

      {links.map((navElement) => {
        return (
          <LinkComponent
            key={navElement.title}
            href={navElement.link}
            title={navElement.title}
            type={"header"}
          />
        );
      })}
    </header>
  );
};

export default Header;
