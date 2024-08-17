import { createContext } from "react";
import { TodoListContextType } from "../types/types";

export const TodoListContext = createContext<TodoListContextType | undefined>(
  undefined
);
