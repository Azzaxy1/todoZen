import { useState } from "react";

const TodoForm = ({ data, setData }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let lastID;
    data.map((data, index, arr) => {
      if (arr.length - 1 == index) {
        lastID = data.id;
      }
    });
    const newData = {
      id: lastID + 1,
      task: value,
      complete: false,
      edit: false,
    };
    setData([...data, newData]);
    setValue("");
  };

  return (
    <form className="w-full mb-[1rem] flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="rounded-lg p-2"
        value={value}
        placeholder="Type your task in today"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-cyan-800 text-white border-none p-[0.55rem] cursor-pointer rounded-lg font-bold"
      >
        Add new task
      </button>
    </form>
  );
};

export default TodoForm;
