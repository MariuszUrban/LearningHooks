import React, { useState } from "react";

export default function CreatePost({ user, posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleCreatePost = (e) => {
    const newPost = { title, content, author: user };
    setPosts([newPost, ...posts]);
    console.log("🚀 ~ handleCreatePost ~ newPost", newPost);
    console.log("🚀 ~ handleCreatePost ~ posts", posts);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreatePost();
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
  );
}
