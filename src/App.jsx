import { useEffect, useState } from "react";
import TodoWrapper from "./components/TodoWrapper";
import TodoApp from "./data/TodoApp.json";

function App() {
  localStorage.setItem("todoAppData", JSON.stringify(TodoApp));

  const getTodoAppData = () => {
    let todoAppData = localStorage.getItem("todoAppData");
    if (todoAppData) {
      return (todoAppData = JSON.parse(localStorage.getItem("todoAppData")));
    } else {
      return [];
    }
  };

  const [data, setData] = useState(getTodoAppData());
  useEffect(() => {
    localStorage.setItem("todoAppData", JSON.stringify(data));
  });
  return (
    <>
      <div className="bg-cyan-400 flex justify-center items-center h-[100vh]">
        <TodoWrapper data={data} setData={setData} />
      </div>
    </>
  );
}

export default App;

