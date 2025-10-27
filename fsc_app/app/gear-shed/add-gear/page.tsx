"use client";

import { FormEvent } from "react";
import { storage } from "@/src/lib/firebase";
import { db } from "@/src/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import TextInput from "@/app/components/textInput";
import GearProps from "@/app/gear-shed/GearProps";
import DropdownInput from "@/app/components/DropdownInput";
import NumberInput from "@/app/components/NumberInput";
import FileInput from "@/app/components/FileInput";

export default function AddGearForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const img_file: File = form.get("img_file") as File;
    console.log(URL.createObjectURL(img_file));

    const new_gear: GearProps = {
      gear_name: (form.get("gear_name") as string) ?? "",
      gear_type: (form.get("gear_type") as string).toLowerCase() ?? "",
      gear_number: 0,
      description: (form.get("description") as string) ?? "",
      checked_out: false,
      size: (form.get("size") as string) ?? "",
      max_checkout_days: (Math.floor(Number(form.get("max_checkout_days"))) ?? 0),
      cloud_storage_path: null,
      alt: (form.get("alt") as string) ?? "",
    };

    const gear_images_ref = ref(storage, `gear_images/${Date.now()}-${img_file.name}`)
    new_gear.cloud_storage_path = await (uploadBytes(gear_images_ref, img_file))
      .then((snapshot) => snapshot.metadata.fullPath);

    console.log(new_gear);
    addDoc(collection(db, "gear"), new_gear);
  };

  return (
    // background
    <div className="flex flex-col items-center font-markazi mx-3">
      <div className="fixed inset-0 -z-1 bg-fixed bg-cover bg-center bg-[url(/mountain-landscape.jpg)]" />
      <div className="flex flex-col items-start w-full md:w-fit backdrop-blur-md m-5 p-3 bg-cloud/80 rounded-xl">
        <h1 className="text-5xl self-center text-burnt-tree">Add Gear</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <DropdownInput
            label="Gear Type"
            name="gear_type"
            placeholder="Choose one..."
            options={[
              "Backpack",
              "Tent",
              "Sleeping Bag",
              "Sleeping Pad",
              "Crash Pad",
              "Headlamp",
            ]}
          ></DropdownInput>
          <TextInput
            label="Gear Name"
            name="gear_name"
            placeholder="e.g. Granite Gear Crown 60"
          />
          <DropdownInput
            label="Size"
            name="size"
            placeholder="N/A"
            options={[
              "XS",
              "S",
              "S/M",
              "M",
              "M/L",
              "L",
              "XL",
              "1P",
              "2P",
              "3P",
            ]}
          ></DropdownInput>
          <TextInput
            label="Description"
            name="description"
            placeholder="Add some information..."
          />
          <FileInput label="Gear Image" name="img_file"/>
          <TextInput
            label="Image Description"
            name="alt"
            placeholder="Describe the image..."
          />
          <NumberInput
            name="max_checkout_days"
            label="Max checkout days"
            min={0}
            max={14}
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
