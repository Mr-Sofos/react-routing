import React from "react";

const Post = ({ id, posts }) => {
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  const post = getPostById(id);
  console.log(post);
  return <h1>{post ? post.label : `Post ${id} не найден`}</h1>;
};

export default Post;
