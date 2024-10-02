import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./ui/Button";
import PropTypes from "prop-types";

const EditButton = ({ onChangeTask }) => {
  return (
    <Button onClick={onChangeTask} className="hover:text-red-600">
      <FontAwesomeIcon icon={faPenToSquare} />
    </Button>
  );
};

EditButton.propTypes = {
  onChangeTask: PropTypes.func.isRequired,
};

export default EditButton;
