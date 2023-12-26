import { addDoc, collection } from "firebase/firestore";
import { db } from "../../db/firebase-config";

export const addOrganization = async (organizationData) => {
  try {
    const docRef = await addDoc(
      collection(db, "organizations"),
      organizationData
    );
    return docRef.id;
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};
