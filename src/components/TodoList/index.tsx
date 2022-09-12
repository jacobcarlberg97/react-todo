import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./Todo/";
import { useStore } from "../../store"


const TodoList: React.FC = () => {
  const todos = useStore(state => state.todos);
  return (
    <>
      <ListGroup>
        {todos.length ? todos.map((todo) => (
          <ListGroup.Item>
            <TodoItem todo={todo} />
          </ListGroup.Item>
        )) : <div>No todos</div>}
      </ListGroup>
    </>
  );
};

export default TodoList;
