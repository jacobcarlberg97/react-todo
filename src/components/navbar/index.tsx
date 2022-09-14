import React, { useMemo } from "react";
import useToggle from "../../hooks";
import { useStore } from "../../store";

const Navbar: React.FC = () => {
  const { todos } = useStore();
  const [value, toggleValue] = useToggle(false);
  const completedTodos = todos.filter((todo) => todo.completed);
  const completedTodosPercentage = useMemo(() => {
    if (todos.length) {
      return (completedTodos.length / todos.length) * 100;
    }
  }, [todos]);

  return (
    <div className="bg-success w-100 p-3 text-white text-center">
      {value ? completedTodosPercentage?.toFixed(2) + "% " : completedTodos.length + " / " + todos.length + " "}
      completed
      <button className="ms-3" onClick={toggleValue}>
        Toggle
      </button>
    </div>
  );
};

export default Navbar;
