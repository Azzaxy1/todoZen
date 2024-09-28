import TodoForm from "./TodoForm";
import Todo from "./Todo";
import PropTypes from "prop-types";

const TodoWrapper = ({ data, setData }) => {
  return (
    <div className="bg-cyan-600 mt-[5rem] p-[2rem]  rounded-[5px]">
      <h1 className="text-center text-[1.75rem] mb-[0.5rem] text-white font-bold">
        Todo List
      </h1>
      <TodoForm data={data} setData={setData} />
      <Todo data={data} setData={setData} />
    </div>
  );
};

TodoWrapper.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
    complete: PropTypes.bool,
  }),
  setData: PropTypes.func,
};

export default TodoWrapper;
