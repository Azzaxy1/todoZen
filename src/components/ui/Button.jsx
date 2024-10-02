import PropTypes from "prop-types";

const Button = ({ onClick, type, className, children }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
