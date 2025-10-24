import type { StaticImageData } from "next/image";

export default interface GearProps {
  gear_name: string;
  gear_type: string; // backpack, tent, sleeping_bag, sleeping_pad, crash_pad
  gear_number: number;
  description: string;
  checked_out: boolean;
  size: string;
  max_checkout: number;
  img: StaticImageData | null;
  alt: string | null;
}
