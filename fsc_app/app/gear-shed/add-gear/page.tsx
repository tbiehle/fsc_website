"use client";

import { FormEvent } from "react";
import TextInput from "@/app/components/textInput";
import Gear from "@/app/gear-shed/Gear";

export default function AddGearForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const newGear: Gear = {
      gear_name: (form.get("gear_name") as string) ?? "",
      gear_type: "",
      gear_number: 0,
      description: (form.get("description") as string) ?? "",
      checked_out: false,
      size: "",
      max_checkout_days: 0,
      cloud_storage_path: null,
      alt: null,
    };

    console.log(newGear);
  };

  return (
    // background
    <div className="flex flex-col items-center font-markazi mx-3">
      <div className="fixed inset-0 -z-1 bg-fixed bg-cover bg-center bg-[url(/mountain-landscape.jpg)]" />
      <div className="flex flex-col items-start w-full md:w-fit backdrop-blur-md m-5 p-3 bg-cloud/80 rounded-xl">
        <h1 className="text-5xl self-center text-burnt-tree">
          Add Gear
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <TextInput
            label="Gear Name"
            name="gear_name"
            placeholder="e.g. Granite Gear Crown 60"
          />
          <TextInput
            label="Description"
            name="description"
            placeholder="Add some information..."
          />
          <button
            type="submit"
            className="self-center bg-pine text-tan-30 rounded-xl text-h1 py-2 px-4 m-3
            hover:bg-grass hover:cursor-pointer 
            active:bg-pine"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
