import { useContext } from "react";
import { Typography } from "@mui/material";
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
      <Typography variant="body1">{toDoItemsList.length} items left</Typography>

      {toDoItemsListFiltered.length ? (
        toDoItemsListFiltered.map((toDoItem) => (
          <ToDoItem
            id={toDoItem.id}
            content={toDoItem.content}
            isActive={toDoItem.isActive}
            key={toDoItem.id}
          />
        ))
      ) : (
        <Typography variant="body1">
          You have no {ViewModeText[viewMode]} tasks
        </Typography>
      )}
    </>
  );
};
