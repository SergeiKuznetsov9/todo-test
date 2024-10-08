import { ReactNode, useReducer } from "react";
import { TodoListContext } from "./toDoListContext";
import { toDoListReducer } from "../reducers/toDoListReducer";
import { ToDoItemsListData } from "../mockData/mockData";
import { ViewMode } from "../types/types";

interface TodoListProviderProps {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoListProviderProps) => {
  const [toDoItemsState, dispatch] = useReducer(toDoListReducer, {
    toDoItemsList: ToDoItemsListData,
    viewMode: ViewMode.ALL,
  });

  return (
    <TodoListContext.Provider value={{ toDoItemsState, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};
