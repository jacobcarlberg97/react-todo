import React, {useMemo} from "react";
import { Todo } from "../../types/Todo";

interface TodoListProps {
    todos: Todo[];
  }

const Navbar: React.FC<TodoListProps> = ({todos}: TodoListProps) => {
    
    const completedTodosPercentage = useMemo(() => {
        const completedTodos = todos.filter((todo) => todo.completed)

        return (completedTodos.length / todos.length) * 100;
    }, [todos]) 

    return (
        <div className="bg-success w-100 p-3 text-white text-center">
            {completedTodosPercentage}%
        </div>
    )
}

export default Navbar