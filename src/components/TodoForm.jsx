import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { setTodosToStorage } from "../utils";
import Input from "./ui/Input";

const TodoForm = ({ todos, setTodos }) => {
  const [taskValue, setTaskValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      task: taskValue,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setTodosToStorage(updatedTodos);
    setTaskValue("");
  };

  const handleChange = (e) => setTaskValue(e.target.value);

  return (
    <form className="w-full mb-[1rem] flex gap-2" onSubmit={handleSubmit}>
      <Input
        classname="p-2 rounded-lg"
        placeholder="Type your task in today"
        type="text"
        onChange={handleChange}
        value={taskValue}
      />
      <Button
        type="submit"
        className="bg-cyan-800 hover:bg-cyan-700 text-white border-none p-[0.55rem] cursor-pointer rounded-lg font-bold"
      >
        <FontAwesomeIcon icon={faPlus} /> Add new task
      </Button>
    </form>
  );
};

TodoForm.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ),
  setTodos: PropTypes.func.isRequired,
};

export default TodoForm;
