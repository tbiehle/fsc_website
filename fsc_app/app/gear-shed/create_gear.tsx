import { db, storage } from "@/src/lib/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

import Gear from "@/app/gear-shed/GearProps";

export default async function create_gear() {
  const new_gear: Gear = {
    gear_name: "Granite Gear 60",
    gear_type: "backpack", // backpack, tent, sleeping_bag, sleeping_pad, crash_pad
    gear_number: 1,
    description:
      "This is an ultralight backpack built for moving fast across the mountains.",
    checked_out: false,
    size: "Men's LG",
    max_checkout_days: 7,
    cloud_storage_path: null,
    alt: "A backpack.",
  };

  new_gear.cloud_storage_path = await fetch("/gg60.png")
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      console.log("here");
      const gear_images_ref = ref(storage, "gear_images/backpack.png");
      return uploadBytes(gear_images_ref, blob);
    })
    .then((snapshot) => {
      console.log(`Uploaded backpack image to ${snapshot.metadata.fullPath}`);
      return snapshot.metadata.fullPath;
    });

  addDoc(collection(db, "gear"), new_gear);
}
