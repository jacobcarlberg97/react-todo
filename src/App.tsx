import React from "react";
import TodoList from "./components/TodoList/index";
import CreateTodo from "./components/TodoList/Todo/CreateTodo/index";
import Navbar from "./components/navbar/";
import api from "./api/index";
import { useQuery } from "react-query";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QUERY_KEY_GET_TODOS } from "./constants";
import { useStore } from "./store";

function App() {
  const fetchTodos = async () => {
    const res = await api.getTodos();
    return res.json();
  };

  const { setTodos } = useStore();

  const { isLoading, isError } = useQuery(QUERY_KEY_GET_TODOS, fetchTodos, { onSuccess: (data) => setTodos(data)});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error.</div>;
  }
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex align-items-center justify-content-center flex-column vh-100 vw-100">
        <CreateTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
