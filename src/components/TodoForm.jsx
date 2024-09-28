import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ todos, setTodos }) => {
  const [taskValue, setTaskValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      task: taskValue,
      complete: false,
    };
    setTodos([...todos, newTodo]);
    setTaskValue("");
  };

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };

  return (
    <form className="w-full mb-[1rem] flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="p-2 rounded-lg"
        value={taskValue}
        placeholder="Type your task in today"
        onChange={handleChange}
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

TodoForm.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
    }).isRequired
  ),
  setTodos: PropTypes.func.isRequired,
};

export default TodoForm;
