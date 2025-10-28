import Gear from "../GearProps";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/src/lib/firebase";

interface GearPreviewProps {
  gear: Gear;
}

const GearPreview: React.FC<GearPreviewProps> = ({ gear }) => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const image_ref = ref(storage, gear.cloud_storage_path ?? "");
      const url = await getDownloadURL(image_ref);
      console.log(url);
      setImg(url);
      setLoading(false);
    };

    fetchImage();
  });

  return (
    <div>
      {!loading && (
        <div className="flex h-fit m-3 max-w-sm gap-2 bg-cloud rounded-lg shadow-md text-field-black">
          <div className="flex items-center w-full gap-2 p-2">
            {/* image */}
            <div className="relative flex-none w-3/10 aspect-square overflow-hidden rounded-xl">
              <Image
                src={img ?? null}
                alt={gear.alt ?? ""}
                loading="eager"
                fill
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              ></Image>
            </div>

            {/* gear details */}
            <div className="flex min-w-0 h-full">
              <div className="flex m-1 flex-col w-full justify-between space-y-1">
                <div className="flex h-fit justify-between m-0">
                  {/* gear number and availability */}
                  <div className="text-sh1 font-markazi font-bold h-fit line-clamp-1 max-w-40">
                    {gear.gear_name}
                  </div>
                  <div className="h-fit">
                    {gear.checked_out ? "Unavailable" : "Available"}{" "}
                  </div>
                </div>
                <div className="flex h-fit justify-between m-0">
                  {/* gear name and size */}
                  <div className="text-p1 font-dmsans font-bold m-0">
                    {gear.gear_type.charAt(0).toUpperCase() +
                      gear.gear_type.slice(1)}{" "}
                    #{gear.gear_number}
                  </div>
                  <div className="w-0.5 h-full bg-tan-30 rounded-sm"></div>
                  <div className="text-p1 font-dmsans font-bold m-0">
                    {gear.size}
                  </div>
                </div>
                <div className="font-dmsans text-p2 text-ellipsis h-fit line-clamp-2">
                  {/* gear description */}
                  {gear.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GearPreview;
