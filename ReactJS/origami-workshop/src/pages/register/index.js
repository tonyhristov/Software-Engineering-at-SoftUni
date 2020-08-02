import React, { Component } from "react";
import Title from "../../components/title";
import styles from "./index.module.css";
import SubmitButton from "../../components/button/submit-button";
import PageLayout from "../../components/page-layout";
import Input from "../../components/input";

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      rePassword: "",
    };
  }

  onChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;

    this.setState(newState);
  };

  render() {
    const { email, password, rePassword } = this.state;

    return (
      <PageLayout>
        <div className={styles.container}>
          <Title title="Register" />
          <Input
            value={email}
            onChange={(e) => this.onChange(e, "email")}
            label="E-Mail"
            id="email"
          />
          <Input
            value={password}
            onChange={(e) => this.onChange(e, "passsword")}
            label="Password"
            id="password"
          />
          <Input
            value={rePassword}
            onChange={(e) => this.onChange(e, "rePassword")}
            label="Re-Password"
            id="rePassword"
          />
          <SubmitButton title="Register" />
        </div>
      </PageLayout>
    );
  }
}

export default RegisterPage;
