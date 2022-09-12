import React, {useMemo} from "react";
import useFormatDate from "../../hooks";
import { useStore } from "../../store";

const Navbar: React.FC = () => {
    const { todos } = useStore();
    const completedTodosPercentage = useMemo(() => {
        if (todos.length) {
        const completedTodos = todos.filter((todo) => todo.completed)

        return (completedTodos.length / todos.length) * 100;
        }
    }, [todos]) 

    return (
        <div className="bg-success w-100 p-3 text-white text-center">
            <h6>{useFormatDate(new Date())}</h6>
            {completedTodosPercentage?.toFixed(2)}% completed
        </div>
    )
}

export default Navbar