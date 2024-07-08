import React, { ChangeEvent } from "react";
import { getSentenceFromCamelCase } from "../helpers/index";

interface SelectProps {
  className?: string;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  label: string;
  name: string;
  onChange: (name: string, value: string) => void;
  style?: React.CSSProperties;
  data: string[];
  validationHandler?: (name: string, errorMessage: string) => void;
  value: string;
  size?: "small" | "medium" | "large";
  labelClassName?: string;
  filter?: string;
  filterValue?: string;
  title?: string;
  secondaryName?: string;
}

const Select: React.FC<SelectProps> = ({
  className = "",
  disabled = false,
  error = "",
  required = false,
  label,
  name,
  onChange,
  style = {},
  data,
  validationHandler = () => {},
  value,
  labelClassName = "",
  title = "",
}) => {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    onChange && onChange(name, value);
  };

  const onValidationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!validationHandler) return;
    const { value } = event.target;
    let errorMessage = "";
    if (!value && required) {
      errorMessage = `Please enter ${getSentenceFromCamelCase(name)}.`;
    }
    validationHandler(name, errorMessage);
  };

  return (
    <div className="flex flex-col mb-8">
      <label htmlFor={name} className={`text-sm mb-2 ${labelClassName}`}>
        {label}
        {required && <span className="text-red-600">&nbsp;</span>}
        {error && <span className="text-red-600 text-sm">{error}</span>}
      </label>
      <select
        value={value}
        required={required}
        name={name}
        className={`border-b border-gray-400 bg-transparent px-4 py-2 ${className}`}
        style={style}
        disabled={disabled}
        onChange={onChangeHandler}
        onBlur={onValidationChange}
      >
        <option value="" disabled>
          {label || title}
        </option>
        {data &&
          data.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

Select.defaultProps = {
  className: "",
  disabled: false,
  error: "",
  required: false,
  label: "",
  style: {},
  data: [],
  validationHandler: () => {},
  size: "medium",
  labelClassName: "text-white",
  filter: "",
  filterValue: "",
  value: "",
  title: "",
};

export default Select;
