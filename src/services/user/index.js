import { addDoc, collection } from "firebase/firestore";
import { db } from "../../db/firebase-config";

export const addUser = async (userData) => {
  try {
    await addDoc(collection(db, "user"), userData);
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};
