import React, { useEffect, useState } from "react";
import UserContext from "./context";
import getCookie from "./utils/cookie";

const App = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logIn = (user) => {
    setUser({ ...user, loggedIn: true });
  };

  const logout = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    setUser({ loggedIn: false });
  };

  useEffect(() => {
    const token = getCookie("x-auth-token");

    if (!token) {
      logout();
      setLoading(false);
      return;
    }

    fetch("http://localhost:9999/api/user/verify", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((promise) => {
        return promise.json();
      })
      .then((response) => {
        if (response.status) {
          logIn({
            username: response.user.username,
            id: response.user._id,
          });
        } else {
          logout();
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ user, logIn, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default App;
