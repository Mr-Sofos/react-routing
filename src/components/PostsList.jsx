import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Link to={`posts/${post.id}`} key={post.id}>
          <h3>{post.label}</h3>
        </Link>
      ))}
    </>
  );
};

export default PostList;
