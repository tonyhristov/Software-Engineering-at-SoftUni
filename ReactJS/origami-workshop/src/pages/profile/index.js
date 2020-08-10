import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import PageLayout from "../../components/page-layout";
import Origamis from "../../components/origamis";
import styles from "./index.module.css";
import logo from "../../images/profile-1506810-1278719.png";
import UserContext from "../../context";

const ProfilePage = () => {
  const [username, setUsername] = useState(null);
  const [posts, setPosts] = useState(null);
  const context = useContext(UserContext);
  const params = useParams();
  const history = useHistory();

  const logOut = () => {
    context.logout();
    history.push("/");
  };

  const getData = useCallback(async () => {
    const id = params.userId;
    const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

    if (!response.ok) {
      history.push("/error");
    } else {
      const user = await response.json();

      setUsername(user.username);
      setPosts(user.posts && user.posts.length);
    }
  }, [params.userId, history]);

  useEffect(() => {
    getData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!username) {
    return (
      <PageLayout>
        <div>Loading...</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className={styles.profile}>
        <img src={logo} alt="Profile Pic" />
        <p>
          <span>User: </span>
          {username}
        </p>
        <p>
          <span>Posts: </span>
          {posts}
        </p>

        <button onClick={logOut}>Logout</button>
      </div>
      <div>
        <h2>3 of your recent posts</h2>
        <Origamis length={3} />
      </div>
    </PageLayout>
  );
};

export default ProfilePage;
