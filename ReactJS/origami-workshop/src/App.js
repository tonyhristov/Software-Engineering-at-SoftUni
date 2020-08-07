import React, { Component } from "react";
import UserContext from "./context";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: null,
    };
  }

  logIn = (user) => {
    this.setState({
      loggedIn: !this.state.loggedIn,
      user,
    });
  };

  logout = () => {
    this.setState({
      loggedIn: false,
      user: null,
    });
  };

  render() {
    const { loggedIn, user } = this.state;

    return (
      <UserContext.Provider
        value={{ loggedIn, user, logIn: this.logIn, logout: this.logout }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default App;
