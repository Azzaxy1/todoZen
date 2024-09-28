import PropTypes from "prop-types";

export const todoPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
});
