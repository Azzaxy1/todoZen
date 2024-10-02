import { useEffect, useState } from "react";
import TodoWrapper from "./components/TodoWrapper";
import inizializedTodos from "./data/todos.json";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    const todosData = JSON.parse(localStorage.getItem("todos"));
    if (todosData) {
      setTodos(todosData);
    } else {
      setTodos(inizializedTodos);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className="bg-cyan-400 flex justify-center items-center min-h-[100vh]">
        <TodoWrapper todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;

