import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { todoPropTypes } from "../utils/propTypes";

const Button = ({ todo, deleteTodo }) => {
  return <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />;
};

Button.propTypes = {
  todo: todoPropTypes.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Button;
