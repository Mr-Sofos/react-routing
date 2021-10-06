import React from "react";
import PostList from "./PostsList";
import Post from "./Post";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const posts = [
    { id: 1, label: "Post 1" },
    { id: 2, label: "Post 2" },
    { id: 3, label: "Post 3" },
  ];

  const { postId } = params;
  return (
    <>
      {postId ? <Post posts={posts} id={postId} /> : <PostList posts={posts} />}
    </>
  );
};

export default Posts;
