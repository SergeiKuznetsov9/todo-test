import { render, screen } from "@testing-library/react";
import { TodoListContext } from "../../../context/toDoListContext";
import { ViewMode } from "../../../types/types";
import { ToDoItemsListData } from "../../../mockData/mockData";
import { ToDoItemsList } from "../ToDoItemsList";
import { ViewModeText } from "../../../constants/constants";

const mockDispatch = jest.fn();

describe("ToDoItemsList", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  const renderComponent = (
    viewMode: ViewMode,
    toDoItemsList = ToDoItemsListData
  ) => {
    render(
      <TodoListContext.Provider
        value={{
          toDoItemsState: {
            toDoItemsList,
            viewMode,
          },
          dispatch: mockDispatch,
        }}
      >
        <ToDoItemsList />
      </TodoListContext.Provider>
    );
  };

  it("renders tasks correctly when there are items in the list", () => {
    renderComponent(ViewMode.ALL);

    expect(
      screen.getByText("Изучить открытые вакансии на HH")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Составить подборку релевантных вакансий")
    ).toBeInTheDocument();
    expect(screen.getByText("Выполнить тестовые задания")).toBeInTheDocument();
    expect(
      screen.getByText("Направить работодателям резюме")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Изучить вакансии в прочих источниках")
    ).toBeInTheDocument();
  });

  it("filters tasks based on view mode", () => {
    renderComponent(ViewMode.ACTIVE);

    expect(
      screen.queryByText("Изучить открытые вакансии на HH")
    ).not.toBeInTheDocument();
    expect(
      screen.getByText("Составить подборку релевантных вакансий")
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Выполнить тестовые задания")
    ).not.toBeInTheDocument();
    expect(
      screen.getByText("Направить работодателям резюме")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Изучить вакансии в прочих источниках")
    ).toBeInTheDocument();
  });

  it("shows message when all tasks are completed and in 'COMPLITED' view mode", () => {
    renderComponent(ViewMode.COMPLITED);

    expect(
      screen.getByText("Изучить открытые вакансии на HH")
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Составить подборку релевантных вакансий")
    ).not.toBeInTheDocument();
    expect(screen.getByText("Выполнить тестовые задания")).toBeInTheDocument();
    expect(
      screen.queryByText("Направить работодателям резюме")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Изучить вакансии в прочих источниках")
    ).not.toBeInTheDocument();
  });

  it("shows message when there are no tasks for the selected view mode", () => {
    renderComponent(ViewMode.ACTIVE, []);

    expect(
      screen.getByText(`You have no ${ViewModeText[ViewMode.ACTIVE]} tasks`)
    ).toBeInTheDocument();
  });
});
