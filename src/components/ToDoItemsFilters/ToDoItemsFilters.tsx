import { useContext } from "react";
import { TodoListContext } from "../../context/toDoListContext";
import {
  ToDoListActionTypes,
  TodoListContextType,
  ViewMode,
} from "../../types/types";

export const ToDoItemsFilters = () => {
  const { dispatch } = useContext(TodoListContext) as TodoListContextType;

  const setViewMode = (viewMode: ViewMode) => {
    dispatch({
      type: ToDoListActionTypes.SET_VIEW_MODE,
      payload: {
        viewMode,
      },
    });
  };

  const clearComplited = () => {
    dispatch({
      type: ToDoListActionTypes.DELETE_COMPLITED_TODO_ITEMS,
    });
  };

  return (
    <>
      <button onClick={clearComplited}>Clear complited</button>

      <button onClick={() => setViewMode(ViewMode.ALL)}>All</button>
      <button onClick={() => setViewMode(ViewMode.ACTIVE)}>Active</button>
      <button onClick={() => setViewMode(ViewMode.COMPLITED)}>Complited</button>
    </>
  );
};
