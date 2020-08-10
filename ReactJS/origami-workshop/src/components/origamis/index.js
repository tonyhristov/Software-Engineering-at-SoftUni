import React, { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";
import Origami from "../origami";
import getOrigami from "../../utils/origami";

const Origamis = (props) => {
  const [origamis, setOrigamis] = useState([]);

  const getOrigamis = useCallback(async () => {
    const origamis = await getOrigami(props.length);
    setOrigamis(origamis);
  }, [props.length]);

  const renderOrigamis = () => {
    return origamis.map((origami, index) => {
      return <Origami key={origami._id} index={index} {...origami} />;
    });
  };

  useEffect(() => {
    getOrigamis();
  }, [props.updatedOrigami, getOrigamis]);

  return (
    <div className={styles["origamis-wrapper"]}>
      {renderOrigamis(props.length)}
    </div>
  );
};

export default Origamis;
