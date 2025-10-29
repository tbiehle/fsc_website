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
        <div>
        </div>
      )}
    </div>
  );
};

export default GearPreview;
