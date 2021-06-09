import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post/post";

import { useSelector } from "react-redux";

const Posts = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <div className="container posts">
          <Link to="/status" className=" button">
            Create A Post
          </Link>
          <h2 className="heading_secondary">My MILESTONES</h2>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      ) : (
        <div className="container">Please Sign In to access this page.</div>
      )}
    </div>
  );
};

export default Posts;
