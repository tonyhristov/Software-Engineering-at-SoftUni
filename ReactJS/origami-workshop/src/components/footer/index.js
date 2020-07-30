import React from "react";
import LinkComponent from "../link";
import styles from "./index.module.css";
import getNavigation from "../../utils/navigation";
import logo from "../../images/blue-origami-bird-flipped.png";

const Footer = () => {
  const links = getNavigation();
  return (
    <footer className={styles.footer}>
      <div>
        {links.map((navElement) => {
          return (
            <LinkComponent
              key={navElement.title}
              href={navElement.link}
              title={navElement.title}
              type={"footer"}
            />
          );
        })}
        <img className={styles.image} src={logo} />
      </div>

      <p className={styles.university}>Software University 2019</p>
    </footer>
  );
};

export default Footer;
