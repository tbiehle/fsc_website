"use client";
import React, { InputHTMLAttributes } from "react";
import Image from "next/image";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const FileInput: React.FC<FileInputProps> = ({ name, label }) => {
  const [file, setFile] = React.useState<File | null>(null);

  return (
    <div>
      <div className="flex flex-col font-markazi mb-3">
        <label className="my-0 text-h1" htmlFor={label}>
          {label}
        </label>
        {file && (
          <div className="rounded-2xl">
            <Image
              src={URL.createObjectURL(file)}
              width={300}
              height={300}
              alt={""}
              className="object-contain mb-4 rounded-2xl"
            ></Image>
          </div>
        )}
        <input
          type="file"
          name={name}
          id={label}
          onChange={(e) => {
            setFile(e.target.files?.[0] ?? null);
          }}
          className="w-full md:w-sm rounded-xs outline-2 outline-tan-80 focus:outline-clay
               bg-cloud/30 p-2 text-md font-dmsans caret-clay
               file:mr-3 file:rounded file:px-3 file:py-1.5
               file:border-0 file:font-medium file:text-sm
               file:bg-clay file:text-white hover:file:bg-clay/90 file:cursor-pointer"
        ></input>
      </div>
    </div>
  );
};

export default FileInput;
