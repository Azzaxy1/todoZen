import PropTypes from "prop-types";

const Input = ({ value, onChange, type, placeholder, checked, classname }) => {
  return (
    <input
      type={type}
      className={classname}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      checked={checked}
    />
  );
};

Input.propTypes = {
  classname: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  checked: PropTypes.bool,
};

export default Input;
