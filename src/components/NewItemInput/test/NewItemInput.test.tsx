import { render, screen, fireEvent } from "@testing-library/react";
import { TodoListContext } from "../../../context/toDoListContext";
import { ToDoListActionTypes, ViewMode } from "../../../types/types";
import { NewItemInput } from "../NewItemInput";

const mockDispatch = jest.fn();

describe("NewItemInput", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  const renderComponent = () => {
    render(
      <TodoListContext.Provider
        value={{
          toDoItemsState: { toDoItemsList: [], viewMode: ViewMode.ALL },
          dispatch: mockDispatch,
        }}
      >
        <NewItemInput />
      </TodoListContext.Provider>
    );
  };

  it("renders the input and button", () => {
    renderComponent();
    expect(
      screen.getByLabelText("Enter todo item description")
    ).toBeInTheDocument();
    expect(screen.getByText("Create ToDo Item")).toBeInTheDocument();
  });

  it("updates input value on change", () => {
    renderComponent();
    const input = screen.getByLabelText("Enter todo item description");
    fireEvent.input(input, { target: { value: "New ToDo Item" } });
    expect(input).toHaveValue("New ToDo Item");
  });

  it("creates new item and clears input", () => {
    renderComponent();
    const input = screen.getByLabelText("Enter todo item description");
    const button = screen.getByText("Create ToDo Item");

    fireEvent.input(input, { target: { value: "New ToDo Item" } });
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: ToDoListActionTypes.ADD_TODO_ITEM,
      payload: expect.objectContaining({
        content: "New ToDo Item",
        id: expect.any(String),
      }),
    });

    expect(input).toHaveValue("");
  });

  it("does not create item if input is empty", () => {
    renderComponent();
    const button = screen.getByText("Create ToDo Item");
    fireEvent.click(button);

    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
