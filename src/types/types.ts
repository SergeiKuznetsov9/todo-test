export enum ViewMode {
  ALL = "all",
  ACTIVE = "active",
  COMPLITED = "complited",
}

export enum ToDoListActionTypes {
  ADD_TODO_ITEM = "add_todo_item",
  CHANGE_TODO_ITEM_STATUS = "change_todo_item_status",
  DELETE_COMPLITED_TODO_ITEMS = "delete_complited_todo_items",
  SET_VIEW_MODE = "set_view_mode",
}

export type ToDoItemType = {
  id: string;
  content: string;
  isActive: boolean;
};

export type ToDoListAction =
  | {
      type: ToDoListActionTypes.ADD_TODO_ITEM;
      payload: {
        id: string;
        content: string;
      };
    }
  | {
      type: ToDoListActionTypes.CHANGE_TODO_ITEM_STATUS;
      payload: {
        id: string;
        isActive: boolean;
      };
    }
  | {
      type: ToDoListActionTypes.DELETE_COMPLITED_TODO_ITEMS;
    }
  | {
      type: ToDoListActionTypes.SET_VIEW_MODE;
      payload: {
        viewMode: ViewMode;
      };
    };

export type ToDoItemsStateType = {
  toDoItemsList: ToDoItemType[];
  viewMode: ViewMode;
};

export type TodoListContextType = {
  toDoItemsState: ToDoItemsStateType;
  dispatch: React.Dispatch<ToDoListAction>;
};
