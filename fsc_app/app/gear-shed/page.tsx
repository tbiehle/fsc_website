"use client";

import GearPreview from "./components/GearPreview";
import GearProps from "./GearProps";
import { useEffect, useState } from "react";
import { db } from "@/src/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function GearShed() {
  const [gear, setGear] = useState<GearProps[]>([]);

  const fetchGear = async () => {
    const snapshot = await getDocs(collection(db, "gear"));
    const db_gear = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as GearProps),
    }));

    return db_gear;
  }

  useEffect(() => {
    const loadGear = async () => {
      const fetched_gear = await fetchGear();
      console.log(fetched_gear)
      setGear(fetched_gear);
    }

    loadGear();
  }, []);

  return (
    <div>
      {gear.map((g, idx) => (<GearPreview key={idx} gear={g} />))}
    </div>
  );
}
