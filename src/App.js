import React from "react";
import "./App.css";
import PostList from "./post/PostList";

const posts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Daniel Bugl",
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Daniel Bugl",
  },
];

function App() {
  return (
    <>
      <PostList posts={posts} />
    </>
  );
}

export default App;
