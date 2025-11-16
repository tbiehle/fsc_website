export default interface ProductProps {
  id: string;
  name: string;
  gear_type: string; // backpack, tent, sleeping_bag, sleeping_pad, crash_pad
  description: string;
  quantity: number;
  available: number;
  max_checkout_days: number;
  cloud_storage_path: string | null;
  alt: string | null;
}
