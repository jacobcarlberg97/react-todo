import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import api from "../../../api/";
import { Todo } from "../../../types/Todo";
import { useMutation } from "react-query";
import { useCreateSideEffect } from "./utils";


interface TodoProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoProps> = ({ todo }: TodoProps) => {
  const removeTodo = async () => {
    return await api.deleteTodo(todo);
  };

  const updateTodo = async () => {
    todo.completed = !todo.completed
    return await api.updateTodo(todo);
  }

  const style = {
    textDecoration: "line-through"
  }

  const { mutate: mutateRemoveTodo } = useMutation(removeTodo, useCreateSideEffect());
  const { mutate: mutateUpdateTodo } = useMutation(updateTodo, useCreateSideEffect());

  return (
    <InputGroup className="mb-3">
      <InputGroup.Checkbox onChange={mutateUpdateTodo} checked={todo.completed} aria-label="Checkbox for following text input" />
      <Form.Control style={todo.completed ? style : {}} read-only="true" value={todo.todo} aria-label="Todo item with checkbox" />
      <Button variant="danger" onClick={() => mutateRemoveTodo()}>-</Button>
    </InputGroup> 
  );
};

export default TodoItem;
