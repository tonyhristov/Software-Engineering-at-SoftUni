import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Aside from "./components/aside";
import Origamis from "./components/origamis";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamis />
      </div>
      <Footer />
    </div>
  );
};

export default App;
