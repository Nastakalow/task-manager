import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
import { app, db } from "../../db/firebase-config";

const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password, role) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size > 0) {
      const userData = querySnapshot.docs[0].data();
      const userRole = userData.role;

      if (userRole === role) {
        return { status: 200, message: "Login successful" };
      } else {
        return { status: 403, message: "Email or password is incorrect" };
      }
    } else {
      return { status: 404, message: "User data not found" };
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    const user = userCredential.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      ...userData,
    });

    return { status: 200, message: "Registration successful" };
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
