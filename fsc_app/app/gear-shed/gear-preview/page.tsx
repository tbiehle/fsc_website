"use client";

import Gear from "../GearProps";
import Image from "next/image";

interface GearPreviewProps {
  gear: Gear;
}

const GearPreview: React.FC<GearPreviewProps> = ({ gear }) => {
  return (
    <div className="m-3">
      <div className="grid grid-cols-10 grid-rows-3 p-1.5 max-w-sm bg-tan-50 rounded-lg shadow-md text-field-black">
        <div className="relative col-[1/4]  aspect-square p-2 overflow-hidden rounded-lg">
          <Image
            src={"/gg60.png"}
            alt={"nothing"}
            loading="eager"
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          ></Image>
        </div>
        <div className="col-[4/11] mx-2 row-span-3 grid grid-rows-3 h-full">
          <div className="flex justify-between">
            <div className="text-h1 font-markazi font-bold h-fit line-clamp-1 max-w-40">
              name
            </div>
            <div className="p-1 bg-grass self-center rounded-xl">
              available
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-p1 font-dmsans font-bold">Gear name</div>
            <div className="w-0.5 h-5 bg-tan-30 rounded-sm"></div>
            <div className="text-p1 font-dmsans font-bold">LG</div>
          </div>
          <div className="font-dmsans text-p2 text-ellipsis line-clamp-2">
            This is a backpack for backpacking i love backpacking placeholder
            text placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearPreview;
