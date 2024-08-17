import { ChangeEvent, useContext } from "react";
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
    <div className={cls.ToDoItem}>
      <input type="checkbox" checked={!isActive} onChange={onChangeStatus} />
      <span className={`${!isActive && cls.finishedItem}`}>{content}</span>
    </div>
  );
};
