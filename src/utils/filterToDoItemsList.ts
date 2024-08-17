import { ToDoItemType, ViewMode } from "../types/types";

export const filterToDoItemsList = (
  viewMode: ViewMode,
  toDoItems: ToDoItemType[]
) => {
  switch (viewMode) {
    case ViewMode.ALL: {
      return toDoItems;
    }

    case ViewMode.ACTIVE: {
      return toDoItems.filter((toDoItem) => toDoItem.isActive);
    }

    case ViewMode.COMPLITED: {
      return toDoItems.filter((toDoItem) => !toDoItem.isActive);
    }

    default:
      return toDoItems;
  }
};
