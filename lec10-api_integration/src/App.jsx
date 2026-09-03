import React from "react";
import UsersDemo from "./components/UsersDemo";
import PostsDemo from "./components/PostsDemo";
import TodosDemo from "./components/TodosDemo";

function App() {
  return (
    <>
    <h2>API INTEGRATION</h2>
    <h3>Users Data</h3>
    <UsersDemo />
    <h3>Posts Data</h3>
    <PostsDemo />
    <h3>Todos Data</h3>
    <TodosDemo />
    </>
  )
}

export default App