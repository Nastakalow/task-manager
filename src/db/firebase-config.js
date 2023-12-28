import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOObugY71dbiCK_BiH95xLBTadV4Z3Tk0",
  authDomain: "task-manager-30813.firebaseapp.com",
  projectId: "task-manager-30813",
  storageBucket: "task-manager-30813.appspot.com",
  messagingSenderId: "308484578601",
  appId: "1:308484578601:web:02cf23171866073c772b38",
  measurementId: "G-XC0MW56ESM",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
