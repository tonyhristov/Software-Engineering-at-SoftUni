import React, { Component, useContext } from "react";
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";
import Title from "../../components/title";
import Origamis from "../../components/origamis";

const Publications = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <Title title="Publications" />
        <Origamis />
      </div>
    </PageLayout>
  );
};

export default Publications;
