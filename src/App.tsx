import React from "react";
import TodoList from "./components/TodoList/index";
import CreateTodo from "./components/TodoList/Todo/CreateTodo/index";
import Navbar from "./components/navbar/";
import api from "./api/index";
import { useQuery } from "react-query";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QUERY_KEY_GET_TODOS } from "./constants";

function App() {
  const fetchTodos = async () => {
    const res = await api.getTodos();
    return res.json();
  }
  
  const { isLoading, isError, data } = useQuery(QUERY_KEY_GET_TODOS, fetchTodos);
  

  if(isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error.</div>
  }
  return (
    <div className="App">
      <Navbar todos={data} />
      <div className="d-flex align-items-center justify-content-center flex-column vh-100 vw-100">
      <CreateTodo />
      <TodoList todos={data} />
      </div>
    </div>
  );
}

export default App;
