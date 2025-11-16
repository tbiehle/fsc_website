"use client";

import GearPreview from "./components/ProductPreview";
import GearProps from "./GearProps";
import { useEffect, useState } from "react";
import { db } from "@/src/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import ProductProps from "./ProductProps";

export default function GearShed() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const db_products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as ProductProps),
    }));

    console.log(db_products)
    return db_products;
  }

  useEffect(() => {
    const loadGear = async () => {
      const fetched_gear = await fetchProducts();
      console.log(fetched_gear)
      setProducts(fetched_gear);
    }

    loadGear();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {products.map((p, idx) => (<GearPreview key={idx} product={p} />))}
    </div>
  );
}
