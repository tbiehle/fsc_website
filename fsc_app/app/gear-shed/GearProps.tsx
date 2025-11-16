import ProductProps from "./ProductProps";

export default interface GearProps extends ProductProps{
  gear_number: number;
  checked_out: boolean;
  size: string;
}
