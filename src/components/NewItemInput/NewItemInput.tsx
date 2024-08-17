import { ChangeEvent, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import { TodoListContext } from "../../context/toDoListContext";
import { ToDoListActionTypes, TodoListContextType } from "../../types/types";
import cls from "./NewItemInput.module.css";

const inputLabel = "Enter todo item description";

export const NewItemInput = () => {
  const { dispatch } = useContext(TodoListContext) as TodoListContextType;
  const [newItemContent, setNewItemContent] = useState("");

  const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItemContent(event.target.value);
  };

  const onCreateItem = (id: string, content: string) => {
    dispatch({
      type: ToDoListActionTypes.ADD_TODO_ITEM,
      payload: { id, content },
    });
    setNewItemContent("");
  };

  return (
    <div className={cls.NewItemInput}>
      <TextField
        label={inputLabel}
        variant="outlined"
        value={newItemContent}
        onInput={onInputHandler}
        className={cls.todoInput}
      />
      <Button
        onClick={() => onCreateItem(uuidv4(), newItemContent)}
        variant="contained"
        className={cls.submitButton}
      >
        Create ToDo Item
      </Button>
    </div>
  );
};
