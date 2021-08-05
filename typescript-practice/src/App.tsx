import TodoList from "./components/TodoList";
import Todo from "./models/Todo";

const items: Todo[] = [new Todo("Learn React"), new Todo("Learn TypeScript")];

function App() {
  return (
    <div>
      <TodoList items={items} />
    </div>
  );
}

export default App;
