import { db } from "./src/lib/firebase.ts";
import ProductProps from "./app/gear-shed/ProductProps.tsx";
import GearProps from "./app/gear-shed/GearProps.tsx";
import { addDoc, collection, doc, setDoc, getDocs } from "firebase/firestore";

const products: ProductProps[] = [
  {
    id: "gg_c_60",
    name: "Granite Gear Crown 60",
    gear_type: "backpack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 10,
    available: 8,
    max_checkout_days: 7,
    cloud_storage_path: "gear_images/gg_crown_60_m.jpg",
    alt: "Granite Gear Crown 60 Backpack image",
  },
  {
    id: "paria_bryce_2p",
    name: "Paria Bryce 2P",
    gear_type: "tent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 5,
    available: 0,
    max_checkout_days: 7,
    cloud_storage_path: "gear_images/bryce_2p.webp",
    alt: "Paria Bryce 2P Tent image",
  },
  {
    id: "nemo_switchback",
    name: "Nemo Switchback Sleeping Pad",
    gear_type: "sleeping_pad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 15,
    available: 10,
    max_checkout_days: 7,
    cloud_storage_path: "gear_images/nemo_switchback.webp",
    alt: "Nemo Switchback Sleeping Pad Image",
  },
];

async function seedData() {
  const snapshot = await getDocs(collection(db, "products"));
  if (snapshot.empty) {
    console.log("Seeding product data...");
    for (const product of products) {
      const productRef = doc(db, "products", product.id);
      await setDoc(productRef, product);
    }
    console.log("Seeding complete.");
  } else {
    console.log("Products collection is not empty. Skipping seeding.");
  }
}

seedData().catch(console.error);
