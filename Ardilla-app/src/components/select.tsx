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
  data: any[]; // Adjust type as per your data structure
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
  size = "medium",
  labelClassName = "",
  filter = "",
  filterValue = "",
  title = "",
  secondaryName = "",
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
    <div className={`flex flex-col px-8 ${size === "medium" ? "w-1/2" : "w-full"}`}>
      <label htmlFor={name} className={`text-sm ${labelClassName}`}>
        {label}
        {required && <span className="text-red-600">&nbsp;*</span>}
        {error && <span className="text-red-600 text-sm">{error}</span>}
      </label>
      <select
        value={value}
        required={required}
        name={name}
        className={`border border-gray-300 rounded px-4 py-2 mt-1 ${className}`}
        style={style}
        disabled={disabled}
        onChange={onChangeHandler}
        onBlur={onValidationChange}
      >
        <option value="" disabled>
          {label || title}
        </option>
        {data &&
          data.map((item, i) =>
            filter ? (
              <option value={item[filterValue]} key={i}>
                {`${item[filter]} ${item[secondaryName] ? item[secondaryName] : ""}`}
              </option>
            ) : (
              <option value={item.value} key={i}>
                {item.item ? item.item : item.value}
              </option>
            )
          )}
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
  labelClassName: "text-black",
  filter: "",
  filterValue: "",
  value: "",
  title: "",
};

export default Select;
