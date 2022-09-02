/* eslint-disable import/no-anonymous-default-export */

import { Todo } from "../types/Todo";

export default {
  createTodo(todo: string) {
    return fetch("http://localhost:5000/api/todo/createTodo", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo }),
    })
  },
  getTodos() {
    return fetch("http://localhost:5000/api/todo/getTodos", {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    })
  },
  deleteTodo(todo: Todo) {
    return fetch("http://localhost:5000/api/todo/deleteTodo", {
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify({todo}),
      headers: { "Content-Type": "application/json" },
    })
  },
};
