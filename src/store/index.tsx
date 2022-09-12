import create from "zustand";
import { Todo } from "../types/Todo";

interface TodoState {
  todos: Todo[];
  addTodo: (todo: string) => void;
  setTodos: (todos: Todo[]) => void;
}

export const useStore = create<TodoState>((set) => ({
  todos: [],
  setTodos: (todos: Todo[]) => {
    set((state) => ({
        todos: [...todos]
    }))
  },
  addTodo: (todo: string) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          todo,
          completed: false,
        } as Todo,
      ],
    }));
  },
}));
