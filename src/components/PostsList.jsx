import React from "react";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((posts) => (
        <h1 key={posts.id}>{posts.label}</h1>
      ))}
    </>
  );
};

export default PostList;
