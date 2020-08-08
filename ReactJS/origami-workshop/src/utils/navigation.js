const getNavigation = (loggedIn, user) => {
  const authLinks = [
    {
      title: "Publications",
      link: "/",
    },
    {
      title: "Share your thoughts",
      link: "/share",
    },
    {
      title: "Profile",
      link: `/profile/${user && user.id}`,
    },
  ];

  const guestLinks = [
    {
      title: "Publications",
      link: "/",
    },
    {
      title: "Login",
      link: "/login",
    },
    {
      title: "Register",
      link: "/register",
    },
  ];

  return loggedIn ? authLinks : guestLinks;
};

export default getNavigation;
