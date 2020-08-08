import React, { Component } from "react";
import LinkComponent from "../link";
import styles from "./index.module.css";
import getNavigation from "../../utils/navigation";
import UserContext from "../../context";

class Aside extends Component {
  static contextType = UserContext;

  render() {
    const { loggedIn, user } = this.context;
    const links = getNavigation(loggedIn, user);

    return (
      <aside className={styles.container}>
        {links.map((navElement) => {
          return (
            <LinkComponent
              key={navElement.title}
              href={navElement.link}
              title={navElement.title}
              type={"aside"}
            />
          );
        })}
      </aside>
    );
  }
}

export default Aside;
