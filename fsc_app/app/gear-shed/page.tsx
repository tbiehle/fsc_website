import GearPreview from "./components/GearPreview";
import Gear from "./Gear";
import backpackimg from "./../../public/gg60.png"

const gear: Gear = {
  gear_name: "Granite Gear 60",
  gear_type: "backpack", // backpack, tent, sleeping_bag, sleeping_pad, crash_pad
  gear_number: 1,
  description:
    "This is an ultralight backpack built for moving fast across the mountains.",
  checked_out: false,
  size: "Men's LG",
  max_checkout: 7,
  img: backpackimg,
  alt: "A backpack."
};

export default function GearShed() {
  return (
    <div>
      <GearPreview gear={gear} />
      <GearPreview gear={gear} />
      <GearPreview gear={gear} />
      <GearPreview gear={gear} />
      <GearPreview gear={gear} />
      <GearPreview gear={gear} />
      <GearPreview gear={gear} />
      <GearPreview gear={gear} />
      <GearPreview gear={gear} />
      <GearPreview gear={gear} />
    </div>
  );
}
