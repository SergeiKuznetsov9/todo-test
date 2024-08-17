import { ToDoItemsListData } from "../../mockData/mockData";
import {
  ToDoListAction,
  ToDoListActionTypes,
  ViewMode,
} from "../../types/types";
import { toDoListReducer } from "../toDoListReducer";

const initialState = {
  toDoItemsList: ToDoItemsListData,
  viewMode: ViewMode.ALL,
};

describe("toDoListReducer", () => {
  it("should add a new todo item when action type is ADD_TODO_ITEM", () => {
    const action = {
      type: ToDoListActionTypes.ADD_TODO_ITEM,
      payload: {
        content: "Task 6",
        id: "6",
      },
    };

    const nextState = toDoListReducer(initialState, action as ToDoListAction);

    expect(nextState.toDoItemsList.length).toBe(6);
    expect(nextState.toDoItemsList[5]).toEqual({
      id: "6",
      content: "Task 6",
      isActive: true,
    });
  });

  it("should change the status of a todo item when action type is CHANGE_TODO_ITEM_STATUS", () => {
    const action = {
      type: ToDoListActionTypes.CHANGE_TODO_ITEM_STATUS,
      payload: { id: "1", isActive: false },
    };

    const nextState = toDoListReducer(initialState, action as ToDoListAction);
    const updatedItem = nextState.toDoItemsList.find((item) => item.id === "1");
    expect(updatedItem!.isActive).toBe(true);
  });

  it("should delete completed todo items when action type is DELETE_COMPLITED_TODO_ITEMS", () => {
    const action = {
      type: ToDoListActionTypes.DELETE_COMPLITED_TODO_ITEMS,
    };

    const nextState = toDoListReducer(initialState, action as ToDoListAction);

    expect(nextState.toDoItemsList.length).toBe(3);
    expect(nextState.toDoItemsList.every((item) => item.isActive)).toBe(true);
  });

  it("should set the view mode when action type is SET_VIEW_MODE", () => {
    const action = {
      type: ToDoListActionTypes.SET_VIEW_MODE,
      payload: { viewMode: ViewMode.ACTIVE },
    };

    const nextState = toDoListReducer(initialState, action as ToDoListAction);

    expect(nextState.viewMode).toBe(ViewMode.ACTIVE);
  });

  it("should return the current state when action type is unknown", () => {
    const action = {
      type: "UNKNOWN_ACTION",
    };

    const nextState = toDoListReducer(initialState, action as ToDoListAction);

    expect(nextState).toEqual(initialState);
  });
});
