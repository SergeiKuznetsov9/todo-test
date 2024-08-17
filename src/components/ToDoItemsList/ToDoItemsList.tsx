import { useContext } from "react";
import { TodoListContext } from "../../context/toDoListContext";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { TodoListContextType } from "../../types/types";
import { filterToDoItemsList } from "../../utils/filterToDoItemsList";
import { ViewModeText } from "../../constants/constants";

export const ToDoItemsList = () => {
  const {
    toDoItemsState: { toDoItemsList, viewMode },
  } = useContext(TodoListContext) as TodoListContextType;

  const toDoItemsListFiltered = filterToDoItemsList(viewMode, toDoItemsList);

  return (
    <>
    <p>{toDoItemsList.length} items left</p>
      {toDoItemsListFiltered.length ? toDoItemsListFiltered.map((toDoItem) => (
        <ToDoItem
          id={toDoItem.id}
          content={toDoItem.content}
          isActive={toDoItem.isActive}
          key={toDoItem.id}
        />
      )) : <div>You have no {ViewModeText[viewMode]} tasks</div>}
    </>
  );
};
