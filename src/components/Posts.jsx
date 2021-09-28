import React from "react";
import _ from "lodash";
import PostList from "./PostsList";
import Post from "./Post";
import query from "query-string";

const Posts = ({ match, location }) => {
  const posts = [
    { id: 1, label: "Post 1" },
    { id: 2, label: "Post 2" },
    { id: 3, label: "Post 3" },
  ];
  const search = query.parse(location.search);
  console.log(search);
  const cropPosts = search
    ? _(posts).slice(0).take(search.count).value()
    : posts;
  const postId = match.params.postId;
  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostList posts={cropPosts} />
      )}
    </>
  );
};

export default Posts;
