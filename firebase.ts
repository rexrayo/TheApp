import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
import { SignData } from "./src/types";


const firebaseConfig = {
  apiKey: "AIzaSyAvrYGYyqFxOu6jAKQx7mvyB7q__HQYQyk",
  authDomain: "kal-app-22aff.firebaseapp.com",
  projectId: "kal-app-22aff",
  storageBucket: "kal-app-22aff.appspot.com",
  messagingSenderId: "78040075646",
  appId: "1:78040075646:web:bda4af99521e1f1518f72f"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, { experimentalForceLongPolling: true });


export function signIn ({ email, password }: SignData) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp ({ email, password }: SignData) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signOut () {
  return auth.signOut();
}