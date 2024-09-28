import { useEffect, useState } from "react";
import TodoWrapper from "./components/TodoWrapper";
import TodoApp from "./data/todos.json";

function App() {
  const [data, setData] = useState([]);
  localStorage.setItem("todos", JSON.stringify(TodoApp));

  const getTodoAppData = () => {
    setData(JSON.parse(localStorage.getItem("todos")));
  };

  useEffect(() => {
    getTodoAppData();
  }, []);
  return (
    <>
      <div className="bg-cyan-400 flex justify-center items-center h-[100vh]">
        <TodoWrapper data={data} setData={setData} />
      </div>
    </>
  );
}

export default App;

