"use client";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputBox = ({
  name,
  max,
  min,
  type,
  placeholder,
  value,
  onChangeHandler,
  icon,
  id,
  maxLength,
  isRequired,
  pattern,
}) => {
  return (
    <div className="border rounded-sm overflow-hidden flex">
      {icon && (
        <FontAwesomeIcon
          className="self-center p-3 text-blue-900"
          icon={icon}
        />
      )}
      <input
        id={id}
        className="py-2 px-3 bg-gray-100 flex-1 w-10/12"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        required={isRequired}
        disabled={isRequired}
        max={max}
        min={min}
        maxLength={maxLength}
        pattern={pattern}
      />
    </div>
  );
};

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default InputBox;
