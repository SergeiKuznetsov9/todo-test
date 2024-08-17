import { TodoProvider } from "./context/toDoListProvider";
import { NewItemInput } from "./components/NewItemInput/NewItemInput";
import { ToDoItemsFilters } from "./components/ToDoItemsFilters/ToDoItemsFilters";
import { ToDoItemsList } from "./components/ToDoItemsList/ToDoItemsList";
import "./App.css";

const App = () => (
  <TodoProvider>
    <NewItemInput />
    <ToDoItemsFilters />
    <ToDoItemsList />
  </TodoProvider>
);

export default App;
