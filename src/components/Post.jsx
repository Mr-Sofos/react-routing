import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ id, posts }) => {
  const history = useHistory();
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  const post = getPostById(id);
  const handleSave = () => {
    history.replace("/posts");
  };

  return (
    <>
      {" "}
      <h1>{post ? post.label : `Post ${id} не найден`}</h1>
      <button
        onClick={() => {
          handleSave();
        }}
      >
        Сохранить
      </button>
    </>
  );
};

export default Post;
