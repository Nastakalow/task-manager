import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";
import { app, db } from "../../db/firebase-config";

const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    return { status: 200, message: "Login successful" };
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (userData) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    const user = res.user;
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
