import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB80KLuomoWrB_ONqLTqNwI-RQOke_ks6I",
  authDomain: "field-studies-c7b9e.firebaseapp.com",
  projectId: "field-studies-c7b9e",
  storageBucket: "field-studies-c7b9e.firebasestorage.app",
  messagingSenderId: "350284752026",
  appId: "1:350284752026:web:67013e038aff77ec82ab23",
  measurementId: "G-S10EZH4QV7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "fsc-db");
const storage = getStorage(app);

export { app, db, storage }