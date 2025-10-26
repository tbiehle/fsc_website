import React, { InputHTMLAttributes } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: string;
}

const TextInput: React.FC<inputProps> = ({ label, placeholder, name }) => {
  return (
    <div className="flex flex-col font-markazi w-full mb-3">
      {label && (
        <label htmlFor={label} className="my-0 text-h1">
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
      )}
      <input
        className="w-full md:w-sm bg-cloud/30 rounded-xs outline-tan-80 focus:outline-clay transition outline-2 p-2
        text-md font-dmsans caret-clay"
        id={label}
        name={name}
        type="text"
        placeholder={placeholder.charAt(0).toUpperCase() + placeholder.slice(1)}
      ></input>
    </div>
  );
};

export default TextInput;
