import { useContext } from "react";
import { Button, ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";

import { TodoListContext } from "../../context/toDoListContext";
import {
  ToDoListActionTypes,
  TodoListContextType,
  ViewMode,
} from "../../types/types";
import cls from "./ToDoItemsFilters.module.css";

export const ToDoItemsFilters = () => {
  const {
    dispatch,
    toDoItemsState: { viewMode },
  } = useContext(TodoListContext) as TodoListContextType;

  const changeViewMode = (
    e: React.MouseEvent<HTMLElement>,
    newViewMode: ViewMode
  ) => {
    dispatch({
      type: ToDoListActionTypes.SET_VIEW_MODE,
      payload: {
        viewMode: newViewMode,
      },
    });
  };

  const clearComplited = () => {
    dispatch({
      type: ToDoListActionTypes.DELETE_COMPLITED_TODO_ITEMS,
    });
  };

  return (
    <div className={cls.ToDoItemsFilters}>
      <ToggleButtonGroup
        color="primary"
        value={viewMode}
        exclusive
        onChange={changeViewMode}
      >
        <ToggleButton value={ViewMode.ALL}>All</ToggleButton>
        <ToggleButton value={ViewMode.ACTIVE}>Active</ToggleButton>
        <ToggleButton value={ViewMode.COMPLITED}>Complited</ToggleButton>
      </ToggleButtonGroup>
      <Button variant="contained" color="error" onClick={clearComplited}>
        Clear complited
      </Button>
    </div>
  );
};
