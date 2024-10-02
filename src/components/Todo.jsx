import PropTypes from "prop-types";
import ButtonDelete from "./DeleteButton";
import EditButton from "./EditButton";
import Input from "./ui/Input";
import { setTodosToStorage } from "../utils";
import SaveButton from "./SaveButton";
import { useState } from "react";

const Todo = ({ todos, setTodos }) => {
  const [editId, setEditId] = useState(null); // Simpan ID todo yang sedang diedit
  const [editTask, setEditTask] = useState(""); // Simpan nilai yang diubah pada task

  const changeCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    setTodosToStorage(updatedTodos);
  };

  const deleteTodo = (id) => {
    const deleteID = todos.filter((data) => {
      return id !== data.id;
    });
    setTodos(deleteID);
    setTodosToStorage(deleteID);
  };

  const startEdit = (id, task) => {
    setEditId(id);
    setEditTask(task);
  };

  const handleEditChange = (e) => setEditTask(e.target.value);

  const saveTodo = (id) => {
    const updatedTodo = todos.map((todo) => {
      return todo.id === id ? { ...todo, task: editTask } : todo;
    });
    setTodos(updatedTodo);
    setTodosToStorage(updatedTodo);
    setEditId(null);
  };

  return todos.map((todo) => {
    return (
      <div
        className="flex justify-between items-center bg-cyan-800 text-white p-[8px] rounded-[5px] mb-[1rem] cursor-pointer"
        key={todo.id}
      >
        {editId === todo.id ? (
          <Input
            classname="w-full mr-2 text-black rounded-sm ps-2"
            value={editTask}
            onChange={handleEditChange}
          />
        ) : (
          <p
            className={
              !todo.completed ? "text-white" : "text-red-400 line-through"
            }
          >
            {todo.task}
          </p>
        )}

        <div className="flex gap-2">
          {editId === todo.id ? (
            <>
              <SaveButton saveTodo={() => saveTodo(todo.id)} />
            </>
          ) : (
            <>
              <Input
                type="checkbox"
                checked={todo.completed}
                onChange={() => changeCompleted(todo.id)}
              />
              <EditButton onChangeTask={() => startEdit(todo.id, todo.task)} />
              <ButtonDelete deleteTodo={deleteTodo} todo={todo} />
            </>
          )}
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
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ),
  setTodos: PropTypes.func.isRequired,
};

export default Todo;
