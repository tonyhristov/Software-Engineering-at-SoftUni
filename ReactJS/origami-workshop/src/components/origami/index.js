import React from "react";
import styles from "./index.module.css";
import logo from "../../images/blue-origami-bird.png";

const Origami = ({ description, author, index }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={logo} alt="logo" />
      <p className={styles.description}>
        <span>{index} - </span>
        {description}
      </p>

      <div>
        <span className={styles.user}>
          <small>Author: {author.username}</small>
        </span>
      </div>
    </div>
  );
};

export default Origami;
