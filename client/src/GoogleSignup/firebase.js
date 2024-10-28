import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "tripmate-593b8.firebaseapp.com",
  projectId: "tripmate-593b8",
  storageBucket: "tripmate-593b8.appspot.com",
  messagingSenderId: "1094818680529",
  appId: "1:1094818680529:web:6752a6aa0e467af2aefff0",
  measurementId: "G-EPS6JBW6EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
