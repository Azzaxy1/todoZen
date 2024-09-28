import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import Button from "./Button";

const Todo = ({ todos, setTodos }) => {
  const changeCompleted = (id) => {
    todos.map((datas) => {
      if (datas.id === id) {
        const updateTodo = [...todos];
        datas.complete ? (datas.complete = false) : (datas.complete = true);
        const getTaskID = document.getElementById(`taskName${datas.id}`);
        datas.complete
          ? (getTaskID.className = "text-red-400 line-through")
          : (getTaskID.className = "text-white");
        setTodos(updateTodo);
      }
    });
  };

  const deleteTodo = (id) => {
    const deleteID = todos.filter((data) => {
      return id !== data.id;
    });
    setTodos(deleteID);
  };

  const editTodo = (id) => {
    todos.map((datas) => {
      if (datas.id === id) {
        const newText = prompt("Edit todo:", datas.task);
        if (newText !== null) {
          const updateTodo = [...todos];
          datas.task = newText;
          setTodos(updateTodo);
        }
      }
    });
  };

  return todos.map((todo, i) => {
    return (
      <div
        className="flex justify-between items-center bg-cyan-800 text-white p-[8px] rounded-[5px] mb-[1rem] cursor-pointer"
        key={i}
      >
        <p id={`taskName${todo.id}`}>{todo.task}</p>
        <div className="flex gap-2">
          <input
            type="checkbox"
            onChange={() => changeCompleted(todo.id)}
            checked={todo.completed}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => editTodo(todo.id)}
          />
          <Button deleteTodo={deleteTodo} todo={todo} />
        </div>
      </div>
    );
  });
};

Todo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
    }).isRequired
  ),
  setTodos: PropTypes.func.isRequired,
};

export default Todo;
