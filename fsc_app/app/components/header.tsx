import Image from "next/image";

export default function Header() {
  return (
    <div className="sticky top-0 flex w-full h-15 z-10 justify-center p-2 bg-tan-20 rounded-b-2xl">
      <div className="relative flex w-1/3 max-w-xs">
        <Image
          src={"/FSC_Logo_Big.svg"}
          alt={"The field studies logo."}
          fill
          objectFit="contain"
        ></Image>
      </div>
    </div>
  );
}
