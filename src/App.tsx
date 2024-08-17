import {Typography} from '@mui/material';
import { TodoProvider } from "./context/toDoListProvider";
import { NewItemInput } from "./components/NewItemInput/NewItemInput";
import { ToDoItemsFilters } from "./components/ToDoItemsFilters/ToDoItemsFilters";
import { ToDoItemsList } from "./components/ToDoItemsList/ToDoItemsList";
import "./App.css";

const App = () => (
  <TodoProvider>
    <Typography variant="h1" align='center'>todos</Typography>
    <NewItemInput />
    <ToDoItemsFilters />
    <ToDoItemsList />
  </TodoProvider>
);

export default App;
