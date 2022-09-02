import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Todo } from "../../types/Todo";
import TodoItem from "./Todo/";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }: TodoListProps) => {
  console.log(todos);
  return (
    <>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item>
            <TodoItem todo={todo} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default TodoList;
