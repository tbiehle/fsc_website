"use client"

import GearPreview from "./components/GearPreview";
import Gear from "./Gear";
import backpackimg from "./../../public/gg60.png"
import { useEffect, useState } from "react";
import { db } from "@/src/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import create_gear from "./create_gear";

const gear1: Gear = {
  gear_name: "Granite Gear 60",
  gear_type: "backpack", // backpack, tent, sleeping_bag, sleeping_pad, crash_pad
  gear_number: 1,
  description:
    "This is an ultralight backpack built for moving fast across the mountains.",
  checked_out: false,
  size: "Men's LG",
  max_checkout_days: 7,
  img: backpackimg,
  alt: "A backpack."
};

export default function GearShed() {
  const [gear, setGear] = useState([]);

  useEffect(() => {
    const gearRef = collection(db, "gear");
    
  }, []);

  return (
    <div>
      <GearPreview gear={gear1} />
    </div>
  );
}
