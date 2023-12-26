import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc1R0S7Kz0dF2NVnkkEjIi7LaY0FFkqL0",
  authDomain: "task-manager-cd5ad.firebaseapp.com",
  projectId: "task-manager-cd5ad",
  storageBucket: "task-manager-cd5ad.appspot.com",
  messagingSenderId: "758711890849",
  appId: "1:758711890849:web:1056dae2ce2821e78051e0",
  measurementId: "G-0GSTHF46Q0",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
