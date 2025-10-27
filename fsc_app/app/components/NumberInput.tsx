import React, { InputHTMLAttributes } from "react";

interface numberProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  min: number;
  max: number;
}

const NumberInput: React.FC<numberProps> = ({ name, label, min, max }) => {
  return (
    <div className="flex flex-col font-markazi w-full mb-3">
      <label className="my-0 text-h1" htmlFor={label}>
        {label}
      </label>
      <input
        type="number"
        name={name}
        id={label}
        min={min}
        max={max}
        step={1}
        className="w-full md:w-sm bg-cloud/30 rounded-xs outline-tan-80 focus:outline-clay transition outline-2 p-2
        text-md font-dmsans caret-clay"
      ></input>
    </div>
  );
};

export default NumberInput;
