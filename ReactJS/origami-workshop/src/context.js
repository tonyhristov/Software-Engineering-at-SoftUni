import React from "react";

const UserContext = React.createContext({
  loggedIn: false,
  user: null,
  logIn: () => {},
  logout: () => {},
});

export default UserContext;
