import React, { ChangeEvent } from "react";
import { getRegExp, getSentenceFromCamelCase } from "../helpers/index";

interface InputProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  error?: string;
  fixLength?: number;
  required?: boolean;
  label: string;
  minLength?: number;
  maxLength?: number;
  name: string;
  onChange: (name: string, value: string | boolean) => void;
  placeholder?: string;
  reqType?: string;
  style?: React.CSSProperties;
  type?: string;
  validationHandler?: (name: string, errorMessage: string) => void;
  value: string | boolean;
  size?: "small" | "medium" | "large";
  labelClassName?: string;
}

const Input: React.FC<InputProps> = ({
  checked = false,
  className = "",
  disabled = false,
  error = "",
  fixLength = 0,
  required = false,
  label,
  minLength = 0,
  maxLength = 0,
  name,
  onChange,
  placeholder = "",
  reqType = "",
  style = {},
  type = "text",
  validationHandler = () => {},
  value,
  labelClassName = "",
}) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;
    onChange && onChange(name, inputValue);
  };

  const onValidationChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!validationHandler) return;
    const { value } = event.target;
    let errorMessage = "";
    if (!value && required) {
      errorMessage = `Please enter ${getSentenceFromCamelCase(name)}.`;
    } else if (minLength && value.length < minLength) {
      errorMessage = `${
        name.charAt(0).toUpperCase() +
        getSentenceFromCamelCase(name).slice(1)
      } must be at least ${minLength} characters long.`;
    } else if (maxLength && value.length > maxLength) {
      errorMessage = `${
        name.charAt(0).toUpperCase() +
        getSentenceFromCamelCase(name).slice(1)
      } must be ${minLength} characters long.`;
    } else if (fixLength && value.length !== fixLength) {
      errorMessage = `${
        name.charAt(0).toUpperCase() +
        getSentenceFromCamelCase(name).slice(1)
      } must be ${fixLength} characters.`;
    } else if (value && reqType && !getRegExp(reqType)?.test(value)) {
      errorMessage = `Please enter valid ${getSentenceFromCamelCase(name)}.`;
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
      <input
        type={type}
        name={name}
        id={name}
        value={value as string}
        checked={checked}
        placeholder={placeholder}
        className={`border-b border-gray-400 bg-transparent px-4 py-2 ${className}`}
        required={required}
        style={style}
        disabled={disabled}
        onChange={onChangeHandler}
        onBlur={onValidationChange}
      />
    </div>
  );
};

export default Input;
