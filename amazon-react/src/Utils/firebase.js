
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq2AUyGQ_ecAhI0WYMW-nOdSYqVgqD05Q",
  authDomain: "clone-66fd5.firebaseapp.com",
  projectId: "clone-66fd5",
  storageBucket: "clone-66fd5.firebasestorage.app",
  messagingSenderId: "1083997782798",
  appId: "1:1083997782798:web:56db3da2443884fd564d5f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
