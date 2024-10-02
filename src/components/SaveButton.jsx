import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./ui/Button";
import PropTypes from "prop-types";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const SaveButton = ({ saveTodo }) => {
  return (
    <Button onClick={saveTodo} className="hover:text-red-600">
      <FontAwesomeIcon icon={faSave} />
    </Button>
  );
};

SaveButton.propTypes = {
  saveTodo: PropTypes.func.isRequired,
};

export default SaveButton;
