import { render, screen, fireEvent } from "@testing-library/react";
import { TodoListContext } from "../../../context/toDoListContext";
import { ToDoItem } from "../ToDoItem";
import { ToDoListActionTypes, ViewMode } from "../../../types/types";

const mockDispatch = jest.fn();

describe("ToDoItem", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  const renderComponent = (
    props = { id: "1", content: "Test ToDo Item", isActive: true }
  ) => {
    render(
      <TodoListContext.Provider
        value={{
          toDoItemsState: { toDoItemsList: [], viewMode: ViewMode.ALL },
          dispatch: mockDispatch,
        }}
      >
        <ToDoItem {...props} />
      </TodoListContext.Provider>
    );
  };

  it("renders the item with correct content", () => {
    renderComponent();

    expect(screen.getByText("Test ToDo Item")).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("calls dispatch with correct arguments when checkbox is clicked", () => {
    renderComponent();
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: ToDoListActionTypes.CHANGE_TODO_ITEM_STATUS,
      payload: { id: "1", isActive: true },
    });
  });

  it("applies correct class when item is not active", () => {
    renderComponent({
      id: "1",
      content: "Completed ToDo Item",
      isActive: false,
    });

    const contentElement = screen.getByText("Completed ToDo Item");
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
    expect(contentElement).toHaveClass("finishedItem");
  });
});
