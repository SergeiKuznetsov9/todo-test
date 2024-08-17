import { ChangeEvent, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoListContext } from "../../context/toDoListContext";
import { ToDoListActionTypes, TodoListContextType } from "../../types/types";

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
    <>
      <input type="text" value={newItemContent} onInput={onInputHandler} />
      <button onClick={() => onCreateItem(uuidv4(), newItemContent)}>
        Create ToDo Item
      </button>
    </>
  );
};
