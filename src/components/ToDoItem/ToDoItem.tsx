import { ChangeEvent, useContext } from "react";
import { Paper } from "@mui/material";
import { Checkbox } from "@mui/material";

import { TodoListContext } from "../../context/toDoListContext";
import { ToDoListActionTypes, TodoListContextType } from "../../types/types";
import cls from "./ToDoItem.module.css";

type ToDoItemProps = {
  id: string;
  content: string;
  isActive: boolean;
};

export const ToDoItem = ({ id, content, isActive }: ToDoItemProps) => {
  const { dispatch } = useContext(TodoListContext) as TodoListContextType;

  const onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ToDoListActionTypes.CHANGE_TODO_ITEM_STATUS,
      payload: { id, isActive: event.target.checked },
    });
  };

  return (
    <Paper elevation={3} className={cls.ToDoItem}>
      <Checkbox checked={!isActive} onChange={onChangeStatus} color="success" />
      <span className={`${!isActive && cls.finishedItem}`}>{content}</span>
    </Paper>
  );
};
