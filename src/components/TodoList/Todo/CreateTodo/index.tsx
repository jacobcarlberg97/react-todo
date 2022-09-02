import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import api from "../../../../api/index";
import { useMutation } from "react-query";
import { useCreateSideEffect } from "../utils";

const CreateTodo: React.FC = () => {
  const [todo, setTodo] = React.useState("");

  const addTodo = async () => {
    return await api.createTodo(todo);
  };

  const { mutate: mutateCreateTodo } = useMutation(addTodo, useCreateSideEffect());

  const handleChange = (e: Record<string, any>) => {
    setTodo(e.target.value);
  };

  return (
    <InputGroup className="w-75 mb-2">
      <Form.Control onChange={handleChange} placeholder="Add your new todo" aria-label="Todo item with checkbox" />
      <Button onClick={(e) => mutateCreateTodo()} variant="secondary">
        +
      </Button>
    </InputGroup>
  );
};

export default CreateTodo;
