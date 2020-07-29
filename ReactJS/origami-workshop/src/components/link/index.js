import React from "react";
import styles from "./index.module.css";

const Link = ({ title, href, type }) => {
  return (
    <div className={styles[`${type}-list-item`]}>
      <a href={href} className={styles[`${type}-header-item`]}>
        {title}
      </a>
    </div>
  );
};

export default Link;
