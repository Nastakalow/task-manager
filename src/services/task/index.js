import {
  addDoc,
  collection,
  query,
  getDocs,
  where,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";

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

export const fetchTaskById = async (id) => {
  const docRef = doc(db, "tasks", id);

  const task = getDoc(docRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        const documentData = docSnapshot.data();

        return documentData;
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching document:", error);
    });

  return task;
};

export const updateTask = async (id, taskData) => {
  console.log(taskData);
  const docRef = doc(db, "tasks", id);

  updateDoc(docRef, taskData)
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document:", error);
    });
};
