import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({data, setData}) => {

  const changeCompleted = (id) => {
    data.map((datas) => {
      if (datas.id === id) {
        const updateTodo = [...data];
        datas.complete? datas.complete=false : datas.complete=true
        const getTaskID = document.getElementById(`taskName${datas.id}`);
        datas.complete? getTaskID.className = "line-through text-red-400" : getTaskID.className = "text-white"
        setData(updateTodo)
      }
    })
  }

  const deleteTodo = (id) => {
    const deleteID = data.filter((data) => {
      return id !== data.id
    });
    setData(deleteID)
  }

  const editTodo = (id) => {
    data.map((datas) => {
      if (datas.id === id) {
        const newText = prompt("Edit todo:", datas.task);
        if (newText !== null) {
          const updateTodo = [...data];
          datas.task = newText;
          setData(updateTodo)
        }
      }
    })
  };

  return data.map((dataApp, i) => {
    return (
      <div className="flex justify-between items-center bg-cyan-800 text-white p-[8px] rounded-[5px] mb-[1rem] cursor-pointer" key={i}>
        <p id={`taskName${dataApp.id}`}>
          {dataApp.task}
        </p>
        <div className="flex gap-2">
          <input type="checkbox" onChange={() => changeCompleted(dataApp.id)} checked={dataApp.completed} />
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(dataApp.id)}/>
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(dataApp.id)}/>
        </div>
      </div>
    )
  })
};

export default Todo;
