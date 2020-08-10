import React, { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";
import Origami from "../origami";

const Origamis = (props) => {
  const [origamis, setOrigamis] = useState([]);

  const getOrigamis = useCallback(async () => {
    const promise = await fetch(
      `http://localhost:9999/api/origami?length=${props.length}`
    );
    const origamis = await promise.json();
    setOrigamis(origamis);
  }, [props.length]);

  const renderOrigamis = () => {
    return origamis.map((origami, index) => {
      return <Origami key={origami._id} index={index} {...origami} />;
    });
  };

  useEffect(() => {
    getOrigamis();
  }, [getOrigamis]);

  return (
    <div className={styles["origamis-wrapper"]}>
      {renderOrigamis(props.length)}
    </div>
  );
};

export default Origamis;
