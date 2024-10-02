import TodoForm from "./TodoForm";
import Todo from "./Todo";
import PropTypes from "prop-types";
import { todoPropTypes } from "../utils/propTypes";

const TodoWrapper = ({ todos, setTodos }) => {
  return (
    <div className="bg-cyan-600 my-[5rem] p-[2rem]  rounded-[5px]">
      <h1 className="text-center text-[1.75rem] mb-[0.5rem] text-white font-bold">
        TodoZen
      </h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
};

TodoWrapper.propTypes = {
  todos: PropTypes.arrayOf(todoPropTypes).isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoWrapper;
