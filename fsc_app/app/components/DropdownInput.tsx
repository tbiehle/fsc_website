import React, { InputHTMLAttributes } from "react";

interface menuProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  placeholder: string;
  options: string[];
}

const DropdownInput: React.FC<menuProps> = ({ name, label, options, placeholder }) => {
  options = [`${placeholder}`, ...options];

  return (
    <div className="flex flex-col font-markazi w-full mb-3">
      <label className="my-0 text-h1" htmlFor={label}>
        {label}
      </label>
      <select
        name={name}
        id={label}
        className="w-full md:w-sm bg-cloud/30 rounded-xs outline-tan-80 focus:outline-clay transition outline-2 p-2
        text-md font-dmsans caret-clay"
      >
        {options.map((option) => {
          return <option key={option} className="w-fit">{option}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownInput;
