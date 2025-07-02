import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwOTtMho43q_DOEGfk9ZOmXfhH0qIYLG0",
  authDomain: "food-e-a5a3d.firebaseapp.com",
  projectId: "food-e-a5a3d",
  storageBucket: "food-e-a5a3d.firebasestorage.app",
  messagingSenderId: "470866657733",
  appId: "1:470866657733:web:b32a38e7922acb1ec40bac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;