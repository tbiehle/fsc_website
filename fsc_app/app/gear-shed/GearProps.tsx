export default interface GearProps {
  gear_name: string;
  gear_type: string; // backpack, tent, sleeping_bag, sleeping_pad, crash_pad
  gear_number: number;
  description: string;
  checked_out: boolean;
  size: string;
  max_checkout_days: number;
  cloud_storage_path: string | null;
  alt: string | null;
}
