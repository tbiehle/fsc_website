import Product from "../ProductProps";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/src/lib/firebase";

interface ProductProps {
  product: Product;
}

const ProductPreview: React.FC<ProductProps> = ({ product }) => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const image_ref = ref(storage, product.cloud_storage_path ?? "");
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
        <div className="flex h-fit m-1 max-w-sm bg-cloud rounded-lg shadow-md text-field-black">
          {/* image */}
          <div className="relative flex-none w-3/10 m-1.5 aspect-square overflow-hidden rounded-lg">
            <Image
              src={img ?? null}
              alt={product.alt ?? ""}
              loading="eager"
              fill
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            ></Image>
          </div>

          {/* gear details */}
          <div className="flex items-center m-2">
            <div className="grid grid-rows-[35%_25%_40%] m-1 w-full h-full mr-2">
              <div className="flex h-fit justify-between m-0">
                {/* gear number and availability */}
                <div className="text-h1 font-markazi font-bold truncate max-w-35">
                  {product.name}
                </div>
                <div className="text-p1 self-center bg-mist p-1 px-2 rounded-2xl">
                  {product.available > 0 ? `Available: ${product.available}` : "Unavailable"}
                </div>
              </div>
              <div className="flex h-fit justify-between">
                {/* gear name and size */}
                <div className="text-p1 font-dmsans font-bold m-0">
                  {product.gear_type.charAt(0).toUpperCase() +
                    product.gear_type.slice(1)}{" "}
                </div>
                <div className="w-0.5 h-full bg-tan-80 rounded-sm"></div>
                <div className="flex text-p1 font-dmsans m-0">
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="font-dmsans text-p1 text-ellipsis h-fit line-clamp-2">
                  {/* gear description */}
                  {product.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
