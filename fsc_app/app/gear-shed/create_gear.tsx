import { db } from "@/src/lib/firebase";
import { doc, addDoc, collection } from "firebase/firestore";
import Gear from "@/app/gear-shed/Gear"

const new_gear: Gear = {
  gear_name: "Granite Gear 60",
  gear_type: "backpack", // backpack, tent, sleeping_bag, sleeping_pad, crash_pad
  gear_number: 1,
  description:
    "This is an ultralight backpack built for moving fast across the mountains.",
  checked_out: false,
  size: "Men's LG",
  max_checkout_days: 7,
  img: null,
  alt: "A backpack."
};

export default async function create_gear() {
  await addDoc(collection(db, "gear"), new_gear);
}