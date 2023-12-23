import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAgbx2oePNxzpGLmgnnz9qIhDMyqzFkQY",
  authDomain: "react-auth-1e427.firebaseapp.com",
  projectId: "react-auth-1e427",
  storageBucket: "react-auth-1e427.appspot.com",
  messagingSenderId: "116171565180",
  appId: "1:116171565180:web:b7d7c591adeaca683641f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
