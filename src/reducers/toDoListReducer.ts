import { produce } from "immer";
import {
  ToDoItemsStateType,
  ToDoListAction,
  ToDoListActionTypes,
} from "../types/types";

export const toDoListReducer = (
  toDoItemsState: ToDoItemsStateType,
  action: ToDoListAction
) =>
  produce(toDoItemsState, (draft) => {
    switch (action.type) {
      case ToDoListActionTypes.ADD_TODO_ITEM: {
        const { id, content } = action.payload;

        draft.toDoItemsList.push({
          id,
          content,
          isActive: true,
        });
        break;
      }

      case ToDoListActionTypes.CHANGE_TODO_ITEM_STATUS: {
        const { id, isActive } = action.payload;

        const toDoItem = draft.toDoItemsList.find((item) => item.id === id);
        if (toDoItem) {
          toDoItem.isActive = !isActive;
        }
        break;
      }

      case ToDoListActionTypes.DELETE_COMPLITED_TODO_ITEMS: {
        draft.toDoItemsList = draft.toDoItemsList.filter(
          (toDoItem) => toDoItem.isActive
        );
        break;
      }

      case ToDoListActionTypes.SET_VIEW_MODE: {
        const { viewMode } = action.payload;
        draft.viewMode = viewMode;
        break;
      }

      default:
        return draft;
    }
  });
