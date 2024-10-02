import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { todoPropTypes } from "../utils/propTypes";
import Button from "./ui/Button";

const DeleteButton = ({ todo, deleteTodo }) => {
  const handleDelete = () => deleteTodo(todo.id);

  return (
    <Button onClick={handleDelete} className="hover:text-red-600">
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
};

DeleteButton.propTypes = {
  todo: todoPropTypes.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default DeleteButton;
