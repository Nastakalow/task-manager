import { addDoc, collection, query, getDocs, where } from "firebase/firestore";

import { db } from "../../db/firebase-config";

export const createTaskFetch = async (taskData) => {
  try {
    await addDoc(collection(db, "tasks"), taskData);

    return {
      status: 200,
    };
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

export const fetchTasks = async (id) => {
  const q = query(collection(db, "tasks"), where("organizationId", "==", id));
  const querySnapshot = await getDocs(q);
  const tasks = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return tasks;
};
