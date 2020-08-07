import React, { Component } from "react";
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";
import Title from "../../components/title";
import Origamis from "../../components/origamis";
import UserContext from "../../context";

class Publications extends Component {
  static contextType = UserContext;

  render() {
    console.log(this.context);
    return (
      <PageLayout>
        <div className={styles.container}>
          <Title title="Publications" />
          <Origamis />
        </div>
      </PageLayout>
    );
  }
}

export default Publications;
