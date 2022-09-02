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

  const { mutate: mutateRemoveTodo } = useMutation(removeTodo, useCreateSideEffect());

  return (
    <InputGroup className="mb-3">
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <Form.Control read-only="true" value={todo.todo} aria-label="Todo item with checkbox" />
      <Button onClick={() => mutateRemoveTodo()}>-</Button>
    </InputGroup>
  );
};

export default TodoItem;
