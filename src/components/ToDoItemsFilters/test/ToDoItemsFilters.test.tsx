import { render, screen, fireEvent } from "@testing-library/react";
import { TodoListContext } from "../../../context/toDoListContext";
import { ToDoListActionTypes, ViewMode } from "../../../types/types";
import { ToDoItemsListData } from "../../../mockData/mockData";
import { ToDoItemsFilters } from "../ToDoItemsFilters";

const mockDispatch = jest.fn();

describe("ToDoItemsFilters", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  const renderComponent = () => {
    return render(
      <TodoListContext.Provider
        value={{
          dispatch: mockDispatch,
          toDoItemsState: {
            toDoItemsList: ToDoItemsListData,
            viewMode: ViewMode.ALL,
          },
        }}
      >
        <ToDoItemsFilters />
      </TodoListContext.Provider>
    );
  };

  it("renders all buttons", () => {
    renderComponent();
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Complited")).toBeInTheDocument();
    expect(screen.getByText("Clear complited")).toBeInTheDocument();
  });

  it("dispatches correct action when changing view mode", () => {
    renderComponent();
    const activeButton = screen.getByText("Active");

    fireEvent.click(activeButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: ToDoListActionTypes.SET_VIEW_MODE,
      payload: { viewMode: ViewMode.ACTIVE },
    });
  });

  it("dispatches correct action when clicking 'Clear complited'", () => {
    renderComponent();
    const clearButton = screen.getByText("Clear complited");

    fireEvent.click(clearButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: ToDoListActionTypes.DELETE_COMPLITED_TODO_ITEMS,
    });
  });
});
