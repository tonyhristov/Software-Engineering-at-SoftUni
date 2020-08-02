import React, { Component } from "react";
import PageLayout from "../../components/page-layout";
import Origamis from "../../components/origamis";
import styles from "./index.module.css";
import logo from "../../images/profile-1506810-1278719.png";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      posts: null,
    };
  }

  componentDidMount() {
    this.getUser(this.props.match.params.userId);
  }

  getUser = async (id) => {
    const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

    if (!response.ok) {
      this.props.history.push("/error");
    }

    const user = await response.json();

    this.setState({
      username: user.username,
      posts: user.posts && user.posts.length,
    });
  };

  render() {
    const { username, posts } = this.state;

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
            <span>User:</span>
            {username}
          </p>
          <p>
            <span>Posts:</span>
            {posts}
          </p>
        </div>

        <div>
          <h2>3 of your recent posts</h2>
          <Origamis length={3} />
        </div>
      </PageLayout>
    );
  }
}

export default ProfilePage;
