import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0ZvBK6D6zojPgXXRecdq0TUEDmc_kpoM",
  authDomain: "task-manager-42710.firebaseapp.com",
  projectId: "task-manager-42710",
  storageBucket: "task-manager-42710.appspot.com",
  messagingSenderId: "924414194681",
  appId: "1:924414194681:web:a5436aca2e71a10c474328",
  measurementId: "G-BJ1CV1SFJ2",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
