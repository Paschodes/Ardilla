import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  title: string;
  bgColor?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  title,
  bgColor = 'bg-blue-500', // Replace with your default background color
  className = '',
  disabled = false,
  loading = false,
  style = {},
}) => {
  return (
    <div className="flex justify-start">
      <button
        type={type}
        onClick={onClick}
        className={`h-12 px-8 rounded-full py-3 flex justify-center items-center ${className} ${bgColor}`}
        disabled={disabled || loading}
        style={style}
      >
        {title}
        {loading && (
          <span className="h-6 w-6 rounded-full border-4 border-black animate-spin ml-2"></span>
        )}
      </button>
    </div>
  );
};

export default Button;
