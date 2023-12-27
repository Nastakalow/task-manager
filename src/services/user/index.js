import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../db/firebase-config";

export const fetchUsers = async (id) => {
  const q = query(
    collection(db, "users"),
    where("role", "==", "user"),
    where("organizationId", "==", id)
  );
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
