import React from "react";
import styles from "./index.module.css";

const Input = ({ label, id, value, onChange }) => {
  return (
    <div>
      <label
        className={styles.label}
        htmlFor={id}
        value={value}
        onChange={onChange}
      >
        {label}:
        <input className={styles.input} id={id} />
      </label>
    </div>
  );
};

export default Input;
