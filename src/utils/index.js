const getTodosFromStorage = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

const setTodosToStorage = (todos) => {
  return localStorage.setItem("todos", JSON.stringify(todos));
};

export { getTodosFromStorage, setTodosToStorage };
